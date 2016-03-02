if (Meteor.isServer) {

    Meteor.publish('nasdaqs', function(searchString) {

        if (!searchString || searchString == null) {
            searchString = '';
        }

        let selector = {
            Symbol: {
                '$regex': '.*' + searchString || '' + '.*',
                '$options': 'i'
            },

        }
        return Nasdaqs.find(selector);
    });


    Meteor.publish('nyses', function() {
        return Nyses.find({});
    });


    Meteor.publish('amexs', function() {
        return Amexs.find({});
    });

     Meteor.publish('sps', function() {
        return Sps.find({});
    });

}
