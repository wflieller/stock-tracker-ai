angular
    .module('stockAiApp')
    .controller('SpCtrl', SpCtrl);

function SpCtrl($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    this.subscribe('sps');

    this.helpers({
        data() {
            return Sps.findOne({
                Symbol: $stateParams.stockId
            });
        }

    });
};