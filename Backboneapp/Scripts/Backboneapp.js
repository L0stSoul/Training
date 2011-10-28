/// <reference path="Shared/underscore.js" />
/// <reference path="Shared/backbone.js" />
/// <reference path="Shared/jquery-1.6.2.min.js" />
/// <reference path="Shared/Jquery.tmpl.min.js" />

$(document).ready(function ()
{
    var Item = Backbone.Model.extend({
    });

    var ItemCollection = Backbone.Collection.extend({
        model: Item,
        comparator: function (item)
        {
            return item.get("position");
        }
    });

    var MenuView = Backbone.View.extend({
        el: $('#backbone-menu'),
        template: $('#item-tmpl').template(),

        render: function ()
        {
            this.el.empty();
            $.tmpl(this.template, this.model.toArray()).appendTo(this.el);
            return this;
        }
    });

    var ContentView = Backbone.View.extend({
        el: $('#backbone-content'),
        template: $('#content-tmpl').template(),

        render: function ()
        {
            this.el.empty();
            $.tmpl(this.template, this.model).appendTo(this.el);

            return this;
        }
    });


    var NavigationRouter = Backbone.Router.extend({
        _data: null,
        _items: null,
        _view: null,

        routes: {
            "info/:id": "showInfo",
            "*actions": "defaultRoute"
        },
        initialize: function (options)
        {
            var _this = this;
            $.ajax({
                url: "Backboneapp_data.json",
                dataType: 'json',
                data: {},
                async: false,
                success: function (data)
                {
                    _this._data = data;
                    _this._items = new ItemCollection(data);
                    _this._view = new MenuView({ model: _this._items });
                    _this._view.render();
                    Backbone.history.loadUrl();
                }

            });

            return this;
        },
        defaultRoute: function (actions)
        {
            this.showInfo(1);
        },
        showInfo: function (id)
        {
            var view = new ContentView({ model: this._items.at(id - 1) });
            $(".active").removeClass("active");
            $("#item" + id).addClass("active");
            view.render();
        }
    });

    var navigationRouter = new NavigationRouter;
    Backbone.history.start();
});

