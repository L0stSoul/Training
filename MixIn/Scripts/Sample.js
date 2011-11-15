var Mixin_Babbler =  
{
    say: function ( a ) { console.log("My name is " + this.name + " and i think:'" + this.THOUGHTS + "'"); },
    argue: function() { console.log("You're totally wrong"); }
};

var Mixin_BeverageLover =
{
    drink: function () { console.log("* drinking " + this.FAVORITE_BEVERAGE + " *"); }
};

//

function Man(name)
{
    this.name = name;
}
Man.prototype =
{
    constructor: Man,
     
    THOUGHTS: "I like soccer"
}
extend(Man, Mixin_Babbler);

function Gentleman(name)
{
    this.name = name;
}
Gentleman.prototype =
{
    constructor: Gentleman,

    THOUGHTS: "I like Earl Grey",
    FAVORITE_BEVERAGE: "Tea"
}
extend(Gentleman, Mixin_Babbler, Mixin_BeverageLover);

function Programmer(name)
{
    this.name = name;
}

Programmer.prototype =
{
    constructor: Programmer,

    THOUGHTS: "MVC, MVVM, MVP *___* like it!",
    FAVORITE_BEVERAGE: "Cofee",

    write_good_code: function () { console.log("*writing best code ever*"); this.drink(); }
}
extend(Programmer, Mixin_Babbler, Mixin_BeverageLover);




var man = new Man("Bob");
var gentleman = new Gentleman("Bill");
var programmer = new Programmer("Benjamin");

man.say();
man.argue();

gentleman.say();
gentleman.drink();

programmer.say();
programmer.write_good_code();