/// <reference path="Event.js" />
/// <reference path="jquery-1.6.2.min.js" />


//Simple Sample
$(document).ready(function ()
{
    var event_textUpdated = new Event();

    function Preview(jQuery)
    {
        this._root = jQuery;
        this._text = this._root.find(".text");
        this._button = this._root.find(".updating_control");
        this._isSubscribed = false;

        this.init();
    }
    Preview.prototype =
    {
        _on_button_click: function ()
        {
            if (this._isSubscribed)
            {
                this.unsubscribe();
                this._button.text("Subscribe!");
                return;
            }

            this.subscribe();
            this._button.text("Unsubscribe!");
        },
        init: function ()
        {
            this._button.click($.proxy(this._on_button_click, this));
            this.subscribe();
        },
        update: function (data)
        {
            this._text.text(data);
        },
        subscribe: function ()
        {
            event_textUpdated.subscribe(this.update, this);
            this._isSubscribed = true;
        },
        unsubscribe: function ()
        {
            event_textUpdated.unsubscribe(this.update, this);
            this._isSubscribed = false;
        }
    }

    var preview1 = new Preview($("#preview1"));
    var preview2 = new Preview($("#preview2"));

    preview1.update($("#textbox").val());
    preview2.update($("#textbox").val());
    $("#textbox").keyup(function () { event_textUpdated.raise($(this).val()); });
});
