function extend(object)
{
    var mixins = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < mixins.length; ++i)
    {
        for (var prop in mixins[i])
        {
            if (typeof object.prototype[prop] === "undefined")
            {
                object.prototype[prop] = mixins[i][prop];
            }
        }
    }
}

function extend_2(object)
{
    var mixins = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < mixins.length; ++i)
    {
        for (var prop in mixins[i])
        {
            if (typeof object.prototype[prop] === "undefined")
            {
                bindMethod = function (mixin, prop)
                {
                    return function () { mixin[prop].apply(this, arguments) }
                }

                object.prototype[prop] = bindMethod(mixins[i], prop);
            }
        }
    }
}