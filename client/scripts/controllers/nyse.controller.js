angular
    .module('stockAiApp')
    .controller('NyseCtrl', NyseCtrl);

function NyseCtrl($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    this.subscribe('nyses');

    this.helpers({
        data() {
            return Nyses.findOne({
                Symbol: $stateParams.stockId
            });
        }

    });
};
