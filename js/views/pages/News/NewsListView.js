define(function(require) {

  var Backbone = require("backbone");
  var NewsC = require("collections/NewsC");
  var Utils = require("utils");
  var NewsListView = Utils.Page.extend({

    constructorName: "NewsListView",

    model: NewsC,

    initialize: function() {
      this.template = Utils.templates.newslistview;
      this.model.on('sync', this.render, this);
    },
    
    id: "newslistview",
    className: "i-g page",
    
    events: {
      "tap #eventListItem": "newsDetail",
      "swipeUp #loadMore" : "fetchSheets"
    },

    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    newsDetail: function(ev){
        newsItem=this.model.get($(ev.currentTarget).data('id'));
        var item = {news : newsItem.attributes};
        Backbone.history.navigate("newsview/"+$(ev.currentTarget).data('id'),
        {trigger: true});
    },
     
    fetchSheets: function () {
       this.model.iniziale+=5;
       this.model.fetch({remove: false});
  }
    
  });

  return NewsListView;

});