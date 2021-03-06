define(function (require) {

    var Backbone = require("backbone");
    var Itinerario = require("models/Itinerario");
    var lingua = window.localStorage.getItem("lingua");

    var Itinerari = Backbone.Collection.extend({
        initialize: function (key) {
            this.iniziale = 0;
            this.finale = 8;
            this.category = key;
        },
        category: undefined,
        iniziale: 0,
        finale: 5,
        model: Itinerario,
        lingua: lingua,
        url: function () {
            if (this.category !== undefined) {
                return "http://www.expo.abruzzo.it/rest/itinerari_pag.php?rquest=get&initial=" +
                        encodeURIComponent(this.iniziale) + "&limit=" + encodeURIComponent(this.finale) + '&id_category=' + encodeURIComponent(this.category)+ '&languages_id=' + lingua;
            }
            else
                return "http://www.expo.abruzzo.it/rest/itinerari_pag.php?rquest=get&initial=" +
                        encodeURIComponent(this.iniziale) + "&limit=" + encodeURIComponent(this.finale)+ '&languages_id=' + lingua;
        }

    });
    return Itinerari;
});