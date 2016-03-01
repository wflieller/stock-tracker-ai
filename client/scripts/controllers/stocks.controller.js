angular
    .module('stockAiApp')
    .controller('StocksCtrl', StocksCtrl);

function StocksCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.perPage = 3;
    this.page = 1;
    this.sort = {
        name: 1
    };

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
