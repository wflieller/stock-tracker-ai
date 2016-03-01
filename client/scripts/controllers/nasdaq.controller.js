angular
    .module('stockAiApp')
    .controller('NasdaqCtrl', NasdaqCtrl);

function NasdaqCtrl($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    this.subscribe('nasdaqs');


    this.helpers({
        data() {
            return Nasdaqs.findOne({
                Symbol: $stateParams.stockId
            });
        }

    });
};
