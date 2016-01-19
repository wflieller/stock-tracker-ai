if (Meteor.isServer) {

    Meteor.publish('nasdaqs', function() {
        return Nasdaqs.find({});
    });


    Meteor.publish('nyses', function() {
        return Nyses.find({});
    });


    Meteor.publish('amexs', function() {
        return Amexs.find({});
    });
    
}
