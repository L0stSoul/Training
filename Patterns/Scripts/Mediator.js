/// <reference path="jquery-1.6.2.min.js" />

function Daddy() { }
Daddy.prototype =
{
    constructor: Daddy,

    getBeer: function ()
    {
        if (!kitchen.tryToGetBeer())
        {
            console.log("Daddy: Who the hell drank all my beer?");
            return false;
        }

        console.log("Daddy: Yeeah! My beer!");
        kitchen.oneBeerHasGone();
        return true;
    },
    argue_back: function () { console.log("Daddy: it's my last beer, for shure!"); }
}

function Mammy() { }
Mammy.prototype =
{
    constructor: Mammy,

    argue: function ()
    {
        console.log("Mammy: You are f*king alconaut!");
        kitchen.disputeStarted();
    }
}

function BeerStorage(beer_bottle_count)
{
    this._beer_bottle_count = beer_bottle_count;
}
BeerStorage.prototype =
{
    constructor: BeerStorage,

    takeOneBeerAway: function ()
    {
        if (this._beer_bottle_count == 0) return false;
        this._beer_bottle_count--;
        return true;
    }
}


var kitchen =
{
    daddy: new Daddy(),
    mammy: new Mammy(),
    refrigerator: new BeerStorage(3),
    stash: new BeerStorage(2),

    tryToGetBeer: function ()
    {
        if (this.refrigerator.takeOneBeerAway()) return true;
        if (this.stash.takeOneBeerAway()) return true;

        return false
    },
    oneBeerHasGone: function (){ this.mammy.argue(); },
    disputeStarted: function (){ this.daddy.argue_back(); }
}

var round_counter = 0;
while (kitchen.daddy.getBeer())
{
    round_counter++
    console.log( round_counter + " round passed"); 
}