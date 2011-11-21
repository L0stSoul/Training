
(function(){
console.log("//curry");

function curry( fn ){
	var slice = Array.prototype.slice,
		storedArgs = slice.call( arguments, 1 );

	return function() {
		var args = storedArgs.concat( slice.call( arguments ) );
		return fn.apply( null, args );
	}
}

function printMessage( author, message ){
	console.log( author + " say: " + message )
}

var printMyMessage = curry( printMessage, "me" );

printMyMessage( "I would like to tell you about birds and bees in js world" );
})();