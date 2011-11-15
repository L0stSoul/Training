
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

// Decorator_A
function StripedBall( ball )
{
    this._ball = ball    
}
StripedBall.prototype = 
{
    constructor: StripedBall,

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
    constructor: SpeckledBall,

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

console.log("*heavy decorator*");
var ball1 = new SpeckledBall( new StripedBall( new Ball({ radius:100, color:"red"})));
var ball2 = new StripedBall( new SpeckledBall( new Ball({ radius:100, color:"green"})));

ball1.draw();
ball1.inc();
ball1.draw();

ball2.draw();

//Decorator_B
function MakeStripedBall( ball )
{
    var function_name = "draw";
    var prev_func = ball[ function_name ];

    ball[ function_name ] = function()
    {
        prev_func.apply( this, arguments )
        console.log("and with stripes");
    };

    return ball;
}
function MakeSpeckledBall( ball )
{
    var function_name = "draw";
    var prev_func = ball[function_name];

    ball[function_name] = function ()
    {
        prev_func.apply(this, arguments)
        console.log("and with dots!");
    };

    return ball;
}
console.log("*light decorator*");
var ball3 = MakeStripedBall( MakeSpeckledBall( new Ball({ radius: 150, color: "blue" })));
var ball4 = MakeSpeckledBall(MakeStripedBall(new Ball({ radius: 150, color: "blue" })));

ball3.draw();
ball3.inc();
ball3.draw();

ball4.draw();