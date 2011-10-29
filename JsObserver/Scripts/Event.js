Event = function()
{
    this._observers = [];
}

Event.prototype =
{
    raise: function (data)
    {
        for (var i in this._observers)
        {
            var item = this._observers[i];
            item.observer.call(item.context, data);
        }
    },
    subscribe: function (observer, context)
    {
        var ctx = context || this;
        this._observers.push({ observer: observer, context: ctx });
    },
    unsubscribe: function (observer, context )
    {
        for (var i in this._observers)
            if ( this._observers[i].observer == observer &&
                 this._observers[i].context == context )
                    delete this._observers[i];
    }
} 