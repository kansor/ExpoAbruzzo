define(function(require) {

	var Backbone = require("backbone");
	var Event = require("models/Event");
	
        
	var Events = Backbone.Collection.extend({
		initialize: function() {
			
                },	
		model: Event,
		url: "http://www.expo.abruzzo.it/rest/event.php?rquest=get",
                parse: function (response) {
			
//			console.log("Inside Parse");
//			
//                      var eventi = new Array();
//							
//			for (var i = 0, length = response.length; i < length; i++) {
//                           
//                            var eventTemp = response[i];
//                            //console.log(eventTemp);
//                        eventi.push(new Event(eventTemp));
//                        }
//                            
//			return  (eventi);
//                       console.log
                    console.log(response);
                    return (response);
                }           
                                                         
                               
		
                
               
                
	});    
	return Events;
});