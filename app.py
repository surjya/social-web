#!/usr/bin/env python
from gevent import monkey
monkey.patch_all()
from flask import Flask, url_for, render_template, send_from_directory,session,request
from flask_socketio import SocketIO, emit,join_room, leave_room,close_room, rooms, disconnect,Namespace,send
import jinja2.exceptions
from threading import Lock
import pandas as pd
import json
import re

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
from tweepy import API
from pathlib import Path
from collections import Counter

thread_lock = Lock()
thread = None
tweet_count = 0
tweets_data_path = './data/twitter_data.txt'

#Variables that contains the user credentials to access Twitter API 
access_token = "991597159031103488-xTpAXHNJonWPbG5Xk0xyusXI0X7CIoo"
access_token_secret = "l6iVc9kOR6UuuroSfeCmx14CYjbTTqFoGGtZdb96xRlSZ"
consumer_key = "2lxsiNRLXLws2wTfrgA8FbDfm"
consumer_secret = "NWxZi50qaggTDi57iDC5bAHGtw6wxVudgJFUaYsuD0nZH0rBDj"

my_file = Path(tweets_data_path)

if my_file.is_file() == False:
    f = open(tweets_data_path,'w')
    f.close()

count_all = Counter()
def process_data():
    tweets_data = []
    tweets_file = open(tweets_data_path, "r")
    global count_all
    for line in tweets_file:
        try:
            tweet = json.loads(line)
            terms_all = [term for term in preprocess(tweet['text'])]
            count_all.update(terms_all)
            tweets_data.append(tweet)
            twit_count = twit_count + 1
        except:
            continue
    tweets_file.close()
    df = pd.DataFrame.from_records(tweets_data)
    print(df.columns)
    df1 = df.loc[:,['created_at', 'entities','id','text','user']]
    df1['uname'] = [d.get('screen_name') for d in df1.user]
    df1['profile_pic'] = [d.get('profile_image_url') for d in df1.user]
    df_last5 = df1.tail(5)
    df_last = df_last5[['uname','profile_pic','text']]
    print(df_last)
    return df_last.to_json(orient='records')


def tokenize(s):
    return tokens_re.findall(s)
	
def preprocess(s, lowercase=True):
    tokens = tokenize(s)
    if lowercase:
        tokens = [token if emoticon_re.search(token) else token.lower() for token in tokens]
    return tokens
    
emoticons_str = r"""
    (?:
        [:=;] # Eyes
        [oO\-]? # Nose (optional)
        [D\)\]\(\]/\\OpP] # Mouth
    )"""	
	
regex_str = [
    emoticons_str,
        r'<[^>]+>', # HTML tags
        r'(?:@[\w_]+)', # @-mentions
        r"(?:\#+[\w_]+[\w\'_\-]*[\w_]+)", # hash-tags
        r'http[s]?://(?:[a-z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-f][0-9a-f]))+', # URLs
        r'(?:(?:\d+,?)+(?:\.?\d+)?)', # numbers
        r"(?:[a-z][a-z'\-_]+[a-z])", # words with - and '
        r'(?:[\w_]+)', # other words
        r'(?:\S)' # anything else
    ]

	
tokens_re = re.compile(r'('+'|'.join(regex_str)+')', re.VERBOSE | re.IGNORECASE)
emoticon_re = re.compile(r'^'+emoticons_str+'$', re.VERBOSE | re.IGNORECASE)	


app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode='threading')


class MyStreamListener(StreamListener):
		
    def on_data(self,data):
        global tweet_count
        tweet_count = tweet_count + 1
        f = open(tweets_data_path,'a')
        f.write(data)
        f.close()
        socketio.emit('twit_cnt',{'data': 'New Tweet!', 'count': tweet_count},namespace='/test')
        global count_all
        last_tweets = process_data()
        socketio.emit('recent_tweets',json.loads(last_tweets),namespace='/test')
        d = dict(count_all)
        df = pd.DataFrame(list(d.items()), columns=['text','weight'])
        socketio.emit('word_cloud',
                      df.to_json(orient='records'),
                      namespace='/test')
        print('!!! new tweet !!!')
		
class MyCustomNamespace(Namespace):
    def on_connect(self):
        print("Connected !!!")
        global thread
        with thread_lock:
            if thread is None:
                thread = socketio.start_background_task(target=background_thread)
        print("Connected !!! - after")
        auth = OAuthHandler(consumer_key, consumer_secret)
        auth.set_access_token(access_token, access_token_secret)
        api = API(auth)
        myStreamListener = MyStreamListener()
        global myStream
        myStream = Stream(auth = api.auth, listener=myStreamListener)
        myStream.filter(track=['#unifi'], async=True)
        socketio.emit('twit_cnt',
            {'data': 'New Tweet!', 'count': tweet_count},
            namespace='/test')
        socketio.emit('pst_cnt',
                      {'data': 'Server generated event', 'count': count},
                      namespace='/test')
        				  
        global count_all
        last_tweets = process_data()
        socketio.emit('recent_tweets',json.loads(last_tweets),namespace='/test')
        d = dict(count_all)
        df = pd.DataFrame(list(d.items()), columns=['text','weight'])
        socketio.emit('word_cloud',
                      df.to_json(orient='records'),
                      namespace='/test')


    def on_disconnect(self):
        socketio.emit('Disconnnected !!!',
            {'data': 'Disconnected!', 'count': '-'},
            namespace='/test')

    @staticmethod
    def tweet_received(text):
        print(text)
        socketio.emit('twit_cnt',
            {'data': 'New Tweet!', 'count': tweet_count},
            namespace='/test')
        

count = 0
def background_thread():
    """Example of how to send server generated events to clients."""
    global count
    while True:
        socketio.sleep(3)
        count += 1
        socketio.emit('pst_cnt',
                      {'data': 'Server alive !!!', 'count': count},
                      namespace='/test')
        if count >= 100000:
            count = 0
					  
@app.route('/')
def index():
    return render_template('index.html',async_mode=socketio.async_mode)

@app.route('/<pagename>')
def admin(pagename):
    return render_template(pagename+'.html')

@app.route('/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/', resource)

@app.route('/test')
def test():
    return '<strong>It\'s Alive!</strong>'

@app.errorhandler(jinja2.exceptions.TemplateNotFound)
def template_not_found(e):
    return not_found(e)

@app.errorhandler(404)
def not_found(e):
    return '<strong>Page Not Found!</strong>', 404
	
@socketio.on('my_ping', namespace='/test')
def ping_pong():
    emit('my_pong')


if __name__ == '__main__':
    
    socketio.on_namespace(MyCustomNamespace('/test'))
    socketio.run(app,host='0.0.0.0',port=9000, debug=True)	
	