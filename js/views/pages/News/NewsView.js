define(function(require) {

  var Backbone = require("backbone");
  var News = require("models/News");
  var Utils = require("utils");

  var NewsView = Utils.Page.extend({

    constructorName: "NewsView",

    model: News,

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.newsview;
      this.render;
    },

    id: "newsview",
    className: "i-g page",

    events: {
      "touchend #goToMap": "goToMap"
    },

    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    goToMap: function(e) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    }
  });

  return NewsView;

});