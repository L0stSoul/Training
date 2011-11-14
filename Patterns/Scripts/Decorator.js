function Ball( param )
{
    this._radius = param.radius;
    this._color = param.color;
}
Ball.prototype = 
{
    constructor: Ball,

    INCREMENTATION_STEP: 5,

    draw: function(){console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)},
    inc: function(){ this._radius += this.INCREMENTATION_STEP }
}

function StripedBall( ball )
{
    this._ball = ball    
}
StripedBall.prototype = 
{
    draw: function()
    {
        this._ball.draw();
        console.log("and with stripes");
    },
    inc: function()
    {
        return this._ball.inc();
    }
}

function SpeckledBall( ball )
{
    this._ball = ball    
}
SpeckledBall.prototype = 
{
    draw: function()
    {
        this._ball.draw();
        console.log("and with dots!");
    },
    inc: function()
    {
        return this._ball.inc();
    }
}

var ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
var ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

ball1.draw();
ball1.inc();
ball1.draw();

ball2.draw();
