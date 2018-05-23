$(document).ready(function() {
	console.log("document ready");
	
	var words = [{text: "one", weight: 117},
{text: "more", weight: 156},
{text: "tweet", weight: 91},
{text: "second", weight: 13},
{text: "twit", weight: 26},
{text: "twitting", weight: 13},
{text: "new", weight: 91},
{text: "nice", weight: 26},
{text: "test", weight: 26},
{text: "thats", weight: 26},
{text: "just", weight: 39},
{text: "fine", weight: 52},
{text: "tweets", weight: 52},
{text: "try", weight: 13},
{text: "to", weight: 221},
{text: "be", weight: 169},
{text: "happy", weight: 26},
{text: "era", weight: 13},
{text: "diffuse", weight: 13},
{text: "trending", weight: 13},
{text: "topic", weight: 13},
{text: "keep", weight: 26},
{text: "on", weight: 104},
{text: "tweeting", weight: 52},
{text: "yes", weight: 26},
{text: "here", weight: 13},
{text: "lets", weight: 13},
{text: "tttwwwww", weight: 26},
{text: "the", weight: 377},
{text: "app", weight: 91},
{text: "is", weight: 130},
{text: "up", weight: 52},
{text: "and", weight: 117},
{text: "running", weight: 26},
{text: "guys", weight: 65},
{text: "!", weight: 221},
{text: "download", weight: 78},
{text: "use", weight: 26},
{text: "referral", weight: 26},
{text: "code", weight: 26},
{text: "you", weight: 169},
{text: "get", weight: 91},
{text: "during", weight: 26},
{text: "your", weight: 117},
{text: "registration", weight: 26},
{text: "f", weight: 26},
{text: "…", weight: 351},
{text: "https://t.co/k5hn8ais6p", weight: 26},
{text: "hello", weight: 13},
{text: "everybody", weight: 26},
{text: "因為辦公室的無線網路太爛", weight: 13},
{text: "，", weight: 39},
{text: "買了三台", weight: 13},
{text: "ap來更換", weight: 13},
{text: "這個時候就可以感受到unifi", weight: 13},
{text: "controller", weight: 13},
{text: "的價值", weight: 13},
{text: ".", weight: 429},
{text: "然後驗證改用radius", weight: 13},
{text: "使用synology", weight: 13},
{text: "diskstation", weight: 13},
{text: "來做真是簡單", weight: 13},
{text: "。", weight: 13},
{text: "unijos", weight: 208},
{text: "stand", weight: 26},
{text: "coming", weight: 39},
{text: "pretty", weight: 26},
{text: "soon", weight: 91},
{text: "🚂", weight: 26},
{text: "excitement", weight: 26},
{text: "immeasurable", weight: 26},
{text: "don", weight: 78},
{text: "’", weight: 104},
{text: "t", weight: 78},
{text: "want", weight: 26},
{text: "miss", weight: 65},
{text: "this", weight: 78},
{text: ",", weight: 156},
{text: "tru", weight: 13},
{text: "https://t.co/ceoealzypg", weight: 13},
{text: "make", weight: 39},
{text: "transfers", weight: 26},
{text: "pay", weight: 26},
{text: "bills", weight: 26},
{text: "card", weight: 26},
{text: "control", weight: 26},
{text: "even", weight: 26},
{text: "locate", weight: 26},
{text: "atm", weight: 26},
{text: "/", weight: 26},
{text: "branches", weight: 26},
{text: "with", weight: 91},
{text: "from", weight: 130},
{text: "comfort", weight: 52},
{text: "zone", weight: 52},
{text: "ye", weight: 13},
{text: "https://t.co/x4uvmpbln6", weight: 13},
{text: "book", weight: 26},
{text: "tickets", weight: 26},
{text: "biggest", weight: 26},
{text: "shows", weight: 26},
{text: "do", weight: 26},
{text: "now", weight: 65},
{text: "available", weight: 39},
{text: "pl", weight: 13},
{text: "https://t.co/83cgaf4hxu", weight: 13},
{text: "rt", weight: 260},
{text: "@lazywrita", weight: 26},
{text: ":", weight: 260},
{text: "trust", weight: 13},
{text: "me", weight: 13},
{text: "@a", weight: 13},
{text: "can", weight: 13},
{text: "any", weight: 13},
{text: "student", weight: 13},
{text: "out", weight: 13},
{text: "there", weight: 39},
{text: "?", weight: 52},
{text: "what", weight: 65},
{text: "song", weight: 39},
{text: "would", weight: 39},
{text: "like", weight: 39},
{text: "@adekunlegold", weight: 104},
{text: "perform", weight: 39},
{text: "when", weight: 65},
{text: "he", weight: 39},
{text: "arrives", weight: 13},
{text: "for", weight: 156},
{text: "campus", weight: 182},
{text: "s", weight: 78},
{text: "https://t.co/waqhfhtsel", weight: 13},
{text: "socor", weight: 13},
{text: "👏", weight: 13},
{text: "🏾", weight: 13},
{text: "https://t.co/v1vd1ecqgd", weight: 13},
{text: "university", weight: 13},
{text: "of", weight: 78},
{text: "jos", weight: 52},
{text: "in", weight: 65},
{text: "a", weight: 65},
{text: "couple", weight: 13},
{text: "days", weight: 13},
{text: "are", weight: 52},
{text: "excited", weight: 13},
{text: "because", weight: 13},
{text: "we", weight: 13},
{text: "told", weight: 13},
{text: "about", weight: 13},
{text: "i", weight: 13},
{text: "https://t.co/b9r1fs8z3j", weight: 13},
{text: "tour", weight: 65},
{text: "will", weight: 156},
{text: "hitting", weight: 39},
{text: "it", weight: 78},
{text: "nothing", weight: 39},
{text: "😀", weight: 39},
{text: "https://t.co/2jwqmkvtrf", weight: 39},
{text: "adekunlegold", weight: 26},
{text: "live", weight: 26},
{text: "at", weight: 143},
{text: "happening", weight: 26},
{text: "definitely", weight: 26},
{text: "memorable", weight: 26},
{text: "https://t.co/ayivumca1a", weight: 13},
{text: "aids", weight: 13},
{text: "easy", weight: 13},
{text: "payments", weight: 13},
{text: "events", weight: 13},
{text: "movies", weight: 13},
{text: "shopping", weight: 13},
{text: "&", weight: 39},
{text: "amp", weight: 39},
{text: ";", weight: 39},
{text: "it's", weight: 13},
{text: "play", weight: 26},
{text: "store", weight: 26},
{text: "https://t.co/mkaf2f8ri8", weight: 13},
{text: "@officialbmax", weight: 39},
{text: "https://t.co/j2uqkdyse0", weight: 13},
{text: "storm", weight: 104},
{text: "train", weight: 13},
{text: "stop", weight: 13},
{text: "tuesday", weight: 13},
{text: "come", weight: 13},
{text: "have", weight: 13},
{text: "great", weight: 13},
{text: "time", weight: 13},
{text: "@unitybankplc", weight: 13},
{text: "if", weight: 13},
{text: "yo", weight: 13},
{text: "https://t.co/t5euzgfxtv", weight: 13},
{text: "@moverick", weight: 39},
{text: "lagos", weight: 65},
{text: "was", weight: 65},
{text: "lit", weight: 65},
{text: "getting", weight: 39},
{text: "ready", weight: 39},
{text: "'", weight: 39},
{text: "performance", weight: 39},
{text: "https://t.co/hqaqsqzyxp", weight: 39},
{text: "@vponwireless", weight: 52},
{text: "@7signal", weight: 26},
{text: "@ubnt", weight: 52},
{text: "@unifieverywhere", weight: 26},
{text: "o", weight: 52},
{text: "run", weight: 26},
{text: "pack", weight: 26},
{text: "good", weight: 52},
{text: "luck", weight: 26},
{text: "@billiontwits", weight: 104},
{text: "(", weight: 26},
{text: ")", weight: 26},
{text: "comes", weight: 26},
{text: "city", weight: 26},
{text: "https://t.co", weight: 26},
{text: "-", weight: 52},
{text: "lots", weight: 52},
{text: "other", weight: 26},
{text: "artists", weight: 26},
{text: "storming", weight: 26},
{text: "tomorrow", weight: 52},
{text: "8", weight: 52},
{text: "th", weight: 52},
{text: "10", weight: 26},
{text: "need", weight: 26},
{text: "cuz", weight: 26},
{text: "acti", weight: 26},
{text: "free", weight: 26},
{text: "airtime", weight: 26},
{text: "refer", weight: 26},
{text: "people", weight: 26},
{text: "waiting", weight: 26},
{text: "playstore", weight: 26},
{text: "👌", weight: 26},
{text: "http", weight: 26},
{text: "so", weight: 26},
{text: "expecting", weight: 26},
{text: "same", weight: 26},
{text: "https://t.co/k0inmtfnbe", weight: 26},
{text: "hi", weight: 26},
{text: "vocmine", weight: 13},
{text: "#ukmfcofficial", weight: 39},
{text: "#ukm", weight: 39},
{text: "#ukmpower", weight: 39},
{text: "#thevarsityboys", weight: 39},
{text: "#ligapremier2018", weight: 39},
{text: "#iflix", weight: 39},
{text: "#fusionex", weight: 39},
{text: "fusionex", weight: 39},
{text: "international", weight: 39},
{text: "https://t.co/qihbqsx9r3", weight: 13},
{text: "afternoon", weight: 26},
{text: "delete", weight: 26},
{text: "all", weight: 26},
{text: "@ukm_fc", weight: 26},
{text: "#evomaniaburnz", weight: 26},
{text: "#", weight: 26},
{text: "e", weight: 78},
{text: "check", weight: 13},
{text: "after", weight: 13},
{text: "ok", weight: 52},
{text: "123", weight: 26},
{text: "321", weight: 26},
{text: "37828", weight: 26},
{text: "testing", weight: 13},
{text: "checking", weight: 13},
{text: "sptfy", weight: 13},
{text: "twts", weight: 25},
{text: "work", weight: 26},
{text: "organizza", weight: 52},
{text: "openlab", weight: 26},
{text: "delle", weight: 26},
{text: "scienze", weight: 26},
{text: "nei", weight: 26},
{text: "giorni", weight: 26},
{text: "7", weight: 26},
{text: "giugno", weight: 52},
{text: "2018", weight: 26},
{text: "per", weight: 52},
{text: "#bambini", weight: 26},
{text: "#ragazzi", weight: 26},
{text: "#adulti", weight: 26},
{text: "laboratori", weight: 26},
{text: "acc", weight: 26},
{text: "https://t.co/kg8zpohny2", weight: 26},
{text: "@uni_firenze", weight: 26},
{text: "cinque", weight: 26},
{text: "iniziative", weight: 26},
{text: "promuovere", weight: 26},
{text: "la", weight: 26},
{text: "cultura", weight: 26},
{text: "dell", weight: 26},
{text: "#inclusione", weight: 26},
{text: "dal", weight: 26},
{text: "21", weight: 26},
{text: "maggio", weight: 26},
{text: "al", weight: 26},
{text: "27", weight: 26},
{text: "un", weight: 26},
{text: "percorso", weight: 26},
{text: "di", weight: 26},
{text: "twting", weight: 26},
{text: "wting", weight: 26},
{text: "twt", weight: 13},
{text: "hover", weight: 26},
{text: "board", weight: 26},
{text: "no", weight: 13},
{text: "brands", weight: 13},
{text: "1573", weight: 12},
{text: "meow", weight: 38},
{text: "bhow", weight: 18},
{text: "muh", weight: 6}]



google.charts.load('current', {'packages':['gauge']});
var ping_data = null;

google.charts.setOnLoadCallback(drawChart);



function drawChart() {

    ping_data = google.visualization.arrayToDataTable([['Label', 'Value'],['Speed', 80]]);
	

	var options = {
	  width: 100, height: 100,
	  max:200,
	  min:0,
	  greenColor:'#5cb85c',
	  yellowColor:'#f0ad4e',
	  redColor:'#d9534f',
	  redFrom: 150, redTo: 200,
	  yellowFrom:100, yellowTo: 150,
	  greenFrom:0, greenTo: 99,
	  minorTicks: 5
	};

	var chart = new google.visualization.Gauge(document.getElementById('speed'));

	chart.draw(ping_data, options);

	setInterval(function() {
	  ping_data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
	  chart.draw(ping_data, options);
	}, 100);
  }



	
	$('#wordcloud').jQCloud(words,{width:500,height:350,
								   center: { x: 0.6, y: 0.5 },
								   colors:['#d9534f','#f0ad4e','#5cb85c','#337ab7',
								           '#da6360','#f0b460','#6ab86a','#4181b8']})
										   
    // London coordinates - 51.5074° N, 0.1278° W										   
    //var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	var mymap = L.map('mapid').setView([2.9213, 101.656], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidG1ybmQiLCJhIjoiY2poaGZ6aWVsMDVpaDNkbnU2aWxueGl1dCJ9.VSznmu_mH2Sz2QulyUC0ig'
    }).addTo(mymap);	



	
	
	var conn_status = document.getElementById('conn-status');
    //conn_status.classList.add('fa-unlink');
	//conn_status.classList.add('fa-link'); 
	var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    socket.on('twit_cnt', function(msg) {
		document.getElementById("twit-count").innerHTML = msg.count;		
    });
	
	socket.on('recent_tweets', function(msg) {

		var twt_container = document.getElementById("recent-tweets")
		
		var mediaData = '';
		for(var i=0;i<msg.length;i++){
			obj = msg[i]
			
			mediaData += '<li class="media">';
			mediaData += '<div class="media-left">';
			mediaData += '<a href="#">';
			mediaData += '<img class="media-object" src="' + obj.profile_pic + '"alt="...">';
			mediaData += '</a>';
			mediaData += '</div>';
			mediaData += '<div class="media-body">';
			mediaData += '<h4 class="media-heading">' +  obj.uname      +    '</h4>';
			mediaData += obj.text;
			mediaData += '</div>';
			mediaData += '</li>';
		}
		twt_container.innerHTML = mediaData;
		
    });
	

	
	

	socket.on('pst_cnt', function(msg) {
        document.getElementById("post-count").innerHTML = msg.count;
    });
	
	
	socket.on('word_cloud', function(msg) {
		console.log(JSON.parse(msg))
        $('#wordcloud').jQCloud(JSON.parse(msg),{width:500,height:350,shape:'rectangular'})
    });
	
	
	
	var ping_pong_times = [];
    var start_time;
    window.setInterval(function() {
        start_time = (new Date).getTime();
        socket.emit('my_ping');
    }, 1000);
	
    socket.on('my_pong', function() {
                var latency = (new Date).getTime() - start_time;
                ping_pong_times.push(latency);
                ping_pong_times = ping_pong_times.slice(-30); // keep last 30 samples
                var sum = 0;
                for (var i = 0; i < ping_pong_times.length; i++)
                    sum += ping_pong_times[i];
                // conn_status.innerHTML = Math.round(10 * sum / ping_pong_times.length) / 10;
				ping_time = Math.round(10 * sum / ping_pong_times.length) / 10;
				ping_data.setValue(0, 1, ping_time);
				//conn_status.style.color = "green";
				//conn_status.classList.toggle('fa-link');		
            });
			
    socket.io.on('disconnect', function() {
    // handle server error here
    console.log('some error');
	conn_status.innerHTML = Math.round(10 * sum / ping_pong_times.length) / 10;
    conn_status.style.color = "green";
    conn_status.classList.toggle('fa-link');
    });
});