angular
    .module('stockAiApp')
    .controller('StocksCtrl', StocksCtrl);

function StocksCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('nasdaqs');
    this.subscribe('nyses');
    this.subscribe('amexs');

    this.helpers({
            nasdaqs: () => {
                return Nasdaqs.find({});
            },
            nyses: () => {
                return Nyses.find({});
            },
            amexs: () => {
                return Amexs.find();
            }
    });

    ////////////

}
