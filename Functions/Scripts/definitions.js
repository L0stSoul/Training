
console.log("// function definition samples");

//sample a
(function(){
	function a() { console.log(1); }
	b = function() { console.log(2); }
})();

//sample b
(function(){	
	console.log( "sample b" );
	b();

	function b() { console.log(1); }

	/* function b() { console.log(1); }
	 * b();
	 *
	 */
})();

//sample c
(function(){
	console.log( "sample c" );
	function c() { console.log(1); }
	
	c();

	function c() { console.log(2); }

	/* function c() { console.log(1); }
	 * function c() { console.log(2); }
	 * c();
	 */
})();

//sample d
(function(){
	console.log( "sample d" );
	try{
	d();

	var d = function() { console.log(2); }
	}
	catch( e ){
		console.log( e )
	}
	/* var d = undefined;
	 * d();
	 * d = function() { console.log(2); }
	 */
})();

//sample e
(function(){
	console.log( "sample e" );
	var e = function(){ console.log(1); } 
	
	e();

	e = function() { console.log(2); }
})();

//sample f
(function(){
	console.log( "sample f" );
	var f = function() { console.log(1); }
	f();

	function f(){ console.log(2); } 
	f();
})();