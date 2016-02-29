angular
    .module('stockAiApp')
    .controller('StockCtrl', StockCtrl);

function StockCtrl($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    let stockId = $stateParams._id;

    this.helpers({
            data() {
                return Nasdaqs.findOne(stockId);
            }
            
    });
};
