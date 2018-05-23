import facebook


access_token = 'EAACEdEose0cBAGrn1AhKf9T4ccqXEk8o5Nx0dZBSThNko8dw3oKzPktllmC7ZAXnOZBqMChMqTVfIheuhnED39GWgtZAGTEN8dzZAYxalm0yNGtB6SvtZA9Qi9vbpgZA6acXQ5nRri5l3reLZArD697fv9SbA5EX9TBYNcdvEoEg4anFTrl3fqJvOGNOxgeqZArEzZCepamoWBhEYD2rC6RL9KVMZCw8lZCGpwIZD'
PAGE_ID = '344128252278047'
def fetch_post(data):
            post_id = str(data["id"])
            author_id = "-"
            author_name = "-"
            if("from" in data):
                author_id = str(data["from"]["id"].encode('utf-8', 'replace'))
                author_name = str(data["from"]["name"].encode('utf-8', 'replace'))
            message = "-"
            if("message" in data):
                message = str(data["message"].encode('utf-8', 'replace'))
            name = "-"
            if("name" in data):
                name = str(data["name"].encode('utf-8', 'replace'))
            caption = "-"
            if("caption" in data):
                caption = str(data["caption"].encode('utf-8', 'replace'))
            source = "-"
            if("source" in data):
                source = str(data["source"].encode('utf-8', 'replace'))
            description = "-"
            if("description" in data):
                description = str(data["description"].encode('utf-8', 'replace'))
            link = "-"
            if("link" in data):
                link = str(data["link"].encode('utf-8', 'replace'))
            cr_time = "-"
            if("created_time" in data):
                cr_time = str(data["created_time"].encode('utf-8', 'replace'))
            up_time = "-"
            if("updated_time" in data):
                up_time = str(data["updated_time"].encode('utf-8', 'replace'))
            shares = "0"
            if("shares" in data):
                shares = str(data["shares"]["count"])
            likes = "0"
            if("likes" in data):
                likes = str(len(data["likes"]["data"]))
            print("Post-ID: %s" %(post_id))
            print("Author-ID: %s Author-Name: %s" %(author_id,author_name))
            print("Message: %s" %(message))
            print("Name: %s" %(name))
            print("Caption: %s" %(caption))
            print("Source: %s" %(source))
            print("Description: %s" %(description))
            print("Link: %s" %(link))
            print("Created-Time: %s Updated-Time: %s" %(cr_time,up_time))
            print("Shares: %s" %(shares))
            print("Likes: %s" %(likes))

graph = facebook.GraphAPI(access_token)
#strr = "/\v2.0/\"+str(PAGE_ID)+"/\feed"
strr = "/v2.0/" + PAGE_ID + "/feed"
profile = graph.get_object(strr)

print(profile)
sz = len(profile["data"])
for x in range(0,sz):
    if("id" in profile["data"][x]):
        details = fetch_post(profile["data"][x])