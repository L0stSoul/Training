
console.log("//init-time branching");

// sample bad;
(function(){
function saySomethingClever(){
	var appleTest = /Apple/i;
	var googleTest = /Google/i;

	if( appleTest.test(navigator.vendor) ) console.log("I love apples <3")
	else if( googleTest.test(navigator.vendor) ) console.log("android is everything for me <3")
	else console.log("i love this unpopular corporation too")
}

saySomethingClever();

})();

// sample good;
(function(){

var saySomethingClever;

(function(){
	var appleTest = /Apple/i;
	var googleTest = /Google/i;

	if( appleTest.test(navigator.vendor) ) 
		saySomethingClever = function(){ console.log("I love apples <3"); }
	else if( googleTest.test(navigator.vendor) )
		saySomethingClever = function(){ console.log("android is everything for me <3"); }
	else saySomethingClever = function(){ console.log("i love this unpopular corporation too"); }
})();

saySomethingClever();

})();