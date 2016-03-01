angular
    .module('stockAiApp')
    .controller('AmexCtrl', AmexCtrl);

function AmexCtrl($scope, $reactive, $stateParams) {
    $reactive(this).attach($scope);

    this.subscribe('amexs');

    this.helpers({
        data() {
            return Amexs.findOne({
                Symbol: $stateParams.stockId
            });
        }

    });
};
