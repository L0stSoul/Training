/*inherit_A sample*/
$(document).ready(function ()
{
    function Man(name) { this.name = name }
    Man.prototype.say = function () { console.log("My name is " + this.name) }

    function Gentleman(name) { Man.call(this, name); }
    inherit_A(Gentleman, Man);

    var gentleman = new Gentleman();

    console.log(gentleman instanceof (Gentleman));
    console.log(gentleman instanceof (Man));
});



/*inherit_B sample*/
$(document).ready(function ()
{

    function Man(name) { this.name = name }
    Man.prototype =
    {
        cosntructor: Man,
        THOUGHTS: "wanna beer!",
        say: function ()
        {
            console.log("My name is " + this.name + " and i think:'" + this.THOUGHTS + "'")
        }
    }

    function Gentleman(name, prefered_beverage)
    {
        Man.call(this, name);
        this.prefered_beverage = prefered_beverage;
    }
    Gentleman.prototype = { cosntructor: Gentleman, THOUGHTS: "it's teatime!" }
    inherit_B(Gentleman, Man)

    function Programmer(name, prefered_lang)
    {
        Gentleman.call(this, name, "Cofee");
        this.prefered_lang = prefered_lang;
    }
    Programmer.prototype =
    {
        cosntructor: Programmer,
        THOUGHTS: "runtime error 138? wanna debug XD!"
    }
    inherit_B(Programmer, Gentleman)

    var man = new Man("Jack");
    var gentleman = new Gentleman("John", "Orange pekoe");
    var programmer = new Programmer("James", "C++");

    man.say();
    gentleman.say();
    programmer.say();

    console.log(man instanceof (Programmer));
    console.log(man instanceof (Gentleman));
    console.log(man instanceof (Man));

    console.log(programmer instanceof (Programmer));
    console.log(programmer instanceof (Gentleman));
    console.log(programmer instanceof (Man));

    console.log("");
});

/*inherit_C sample*/
$(document).ready(function ()
{

    function Man(name) { this.name = name }
    Man.prototype =
    {
        __class_name: "Man",
        cosntructor: Man,

        THOUGHTS: "wanna beer!",
        say: function ()
        {
            console.log("My name is " + this.name + " and i think:'" + this.THOUGHTS + "'")
        }
    }

    function Gentleman(name, prefered_beverage)
    {
        Man.call(this, name);
        this.prefered_beverage = prefered_beverage;
    }
    Gentleman.prototype =
    {
        __class_name: "Gentleman",
        cosntructor: Gentleman,
        
        THOUGHTS: "it's teatime!"
    }
    inherit_C(Gentleman, Man)

    function Programmer(name, prefered_lang)
    {
        Gentleman.call(this, name, "Cofee");
        this.prefered_lang = prefered_lang;
    }
    Programmer.prototype =
    {
        __class_name: "Programmer",
        cosntructor: Programmer,

        THOUGHTS: "runtime error 138? wanna debug XD!"
    }
    inherit_C(Programmer, Gentleman)

    function BadProgrammer(name)
    {
        Programmer.call(this, name, "brainfuck");
    }
    BadProgrammer.prototype =
    {
        __class_name: "BadProgrammer",
        cosntructor: BadProgrammer,

        THOUGHTS: "runtime error 138? wanna debug XD!",
        say: function () { this.THOUGHTS = this.Man.THOUGHTS; this.Man.say.apply(this); }
    }
    inherit_C(BadProgrammer, Programmer)

    var man = new Man("Jack");
    var gentleman = new Gentleman("John", "Orange pekoe");
    var programmer = new Programmer("James", "C++");
    var badprogrammer = new BadProgrammer("Jake");

    man.say();
    gentleman.say();
    programmer.say();
    badprogrammer.say();

    
    console.log(programmer instanceof (Programmer));
    console.log(programmer instanceof (Gentleman));
    console.log(programmer instanceof (Man));

    console.log("");
});

/*inherit_multiple_sample*/
$(document).ready(function ()
{
    function Mammy() { this.mammy_message = "You Dont love me!" }
    Mammy.prototype =
    {
        __class_name: "Mammy",
        say_something_wise: function () { console.log(this.mammy_message) }
    }

    function Daddy() { this.daddy_message = "I just don't want to be a dad!" }
    Daddy.prototype =
    {
        __class_name: "Daddy",
        say_something_wise: function () { console.log(this.daddy_message) }
    }

    function Lad()
    {
        this.lad_message = "And i want a candy!";
        Mammy.apply(this);
        Daddy.apply(this);
    }
    Lad.prototype =
    {
        __class_name: "Lad",
        say_something_wise: function ()
        {
            this.Daddy.say_something_wise.call(this);
            this.Mammy.say_something_wise.call(this);
            console.log(this.lad_message);
        }
    }
    inhertit_multiple(Lad, Mammy, Daddy)


    var lad = new Lad();
    lad.say_something_wise();

    console.log(lad instanceof (Mammy));
    console.log(lad instanceof (Daddy));
    console.log(lad instanceof (Lad));

});