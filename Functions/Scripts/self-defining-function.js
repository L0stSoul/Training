console.log("//self-defining-functions");

function selfDefining()
{
	console.log("some really heavy initialization occured");
	console.log("f*ck yeah!");
	selfDefining = function(){
		console.log("job done!");
	}
}

selfDefining();
selfDefining();