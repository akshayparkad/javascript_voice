var SpeechRecognition = SpeechRecognition	 || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


var rec = new SpeechRecognition();

rec.lang = 'en-IN';
rec.interimResults = false;
rec.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');

document.body.onclick = function(){
	rec.start();
	console.log('Listing color command.....');
}

rec.onresult = function(event){
	var pagename = event.results[0][0].transcript;
	diagnostic.textContent = 'You Said : ' + pagename;
	window.open('./' + pagename + '.html');
}

rec.onerror = function(event){
	diagnostic.textContent = 'Error occured';
}