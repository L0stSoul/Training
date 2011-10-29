/// <reference path="jquery-1.6.2.min.js" />

(function ($)
{
    $.fn.move = function (x, y)
    {
        this.css({ position: "absolute", left: x, top: y })
        return this;
    };

})(jQuery);