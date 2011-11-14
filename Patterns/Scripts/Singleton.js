// +simplicity
var singleton_A =
{
    log: function( text ){ console.log(text); }
}

// +you may change singleton beahviour
var Singleton_B;
(function(){
    var instance;
    Singleton_B = function(){
        if( instance ){ return instance; }

        instance = this;
        this.log = function( text ){ console.log(text); }

        };
})();