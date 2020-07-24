// List of sentences
var _CONTENT = [ 
	"A Programmer", 
	"A Coder", 
	"A Designer", 
	"A Believer"
];

// Current sentence being processed
var sentance = 0;

// Character number of the current sentence being processed 
var word = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[sentance].substring(0, word + 1);
	_ELEMENT.innerHTML = text;
	word++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[sentance]) {
		// Hide the cursor
		// _CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[sentance].substring(0, word - 1);
	_ELEMENT.innerHTML = text;
	word--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(sentance == (_CONTENT.length - 1))
			sentance = 0;
		else
			sentance++;
		
		word = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 200);
