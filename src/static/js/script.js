const comic_texts = document.getElementsByClassName('comic');

for(var i = 0; i < comic_texts.length; i++)
{
	comic_texts[i].setAttribute("text", comic_texts[i].innerText);
}

var GreetingTyper = function(el, greetings, period) {
	this.greetings = greetings;
	this.el = el;
	this.greetingIndexCounter = 0;
	this.period = parseInt(period, 10) || 2000;
	this.displayChars = [];
	this.tick();
	this.isDeleting = false;
};

GreetingTyper.prototype.tick = function() {
	var greetingIndex = this.greetingIndexCounter % this.greetings.length;
	var fullGreeting = this.greetings[greetingIndex];

	if (this.isDeleting) {
		this.displayChars = fullGreeting.slice(0, this.displayChars.length - 1);
	} else {
		this.displayChars = fullGreeting.slice(0, this.displayChars.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.displayChars.join("")+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.displayChars.length === fullGreeting.length) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.displayChars.length === 0) {
		this.isDeleting = false;
		this.greetingIndexCounter++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {

		var greetings = [ 
			["H","e","l","l","o"], 
			["M","o","i","n"], 
			["П","р","и","в","і","т"], 
			["こ","ん","に","ち","は"], 
			["S","a","w","u","b","o","n","a"], 
			["H","o","l","a"], 
			["D","i","a"," ","d","h","u","i","t"], 
			["안","녕","하","세","요"], 
			["B","o","n","j","o","u","r"], 
			["م","ر","ح","ب","ا"], 
			["न","म","स्ते"], 
			["Γ","ε","ι","α"," ","σ","ο","υ"], 
			["ש","ל","ו","ם"], 
			["C","i","a","o"], 
			["ส","วั","ส","ดี"], 
			["H","u","j","a","m","b","o"]  
		];
		
		var period = 2000;
		if (elements[i]) {
			new GreetingTyper(elements[i], greetings, period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #00FF7B}";
	document.body.appendChild(css);
};