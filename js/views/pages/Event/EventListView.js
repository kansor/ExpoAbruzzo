define(function (require) {

    var Backbone = require("backbone");
//    var h = require("handlebars");
//    h.registerHelper('getDay', function (passedString) {
//        return new Handlebars.SafeString(passedString.substring(8, 10));
//    });
//    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
//    h.registerHelper('getMonth', function (passedString) {
//        return new Handlebars.SafeString(mesi[passedString.substring(5, 7) - 1]);
//    });
//      var formatoData = require("helperdateformat");
    var Events = require("collections/Events");
    var Utils = require("utils");
    var EventView = require("views/pages/Event/EventView");
    var EventListView = Utils.Page.extend({
        constructorName: "EventListView",
        model: Events,
        initialize: function (options) {
            this.options = options;
            _.bindAll(this, 'render');
            if(this.options.lang == 1){
                this.template = Utils.templates.eventlistview;
            }else{
                this.template = Utils.templates.eventlistviewen;
            }
            
            this.model.on('sync', this.render, this);
            $('#back-button').css('display', 'block');
            $('#settingsModal').css('display', 'none');
            $('#toggle-button').css('display', 'none');
        },
        id: "eventlistview",
        className: "i-g page",
        events: {
            "tap #eventListItem": "eventDetail",
            "scroll": "fetchSheets"

        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            
            return this;
        },
        eventDetail: function (ev) {
            Backbone.history.navigate("eventview/" + $(ev.currentTarget).data('id'), {
                trigger: true});
        },
        fetchSheets: function () {

            var delta = this.checkScroll();

            if (delta > -60) {
                this.model.iniziale += 5;
                this.model.fetch({remove: false});
            }
        },
        checkScroll: function () {
            var scrollHeight = this.el.offsetHeight;
//            console.log("scrollHeight " + scrollHeight);
            var scrollTop = this.el.scrollHeight;// Altezza del contenuto di Page
//            console.log("scrollTop " + scrollTop);
            var offsetHeight = this.el.scrollTop;  // Delta spostamento dello spostamento
//            console.log("offsetHeight" + offsetHeight);
            return (scrollHeight - (scrollTop - offsetHeight));
        }
    });

    return EventListView;

});