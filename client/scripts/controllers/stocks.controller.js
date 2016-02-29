angular
    .module('stockAiApp')
    .controller('StocksCtrl', StocksCtrl);

function StocksCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('nasdaqs');
    this.subscribe('nyses');
    this.subscribe('amexs');

    this.helpers({
            nasdaq() {
                return Nasdaqs.find({});
            },
            nyse() {
                return Nyses.find({});
            },
            amex() {
                return Amexs.find({});
            }
    });
};
