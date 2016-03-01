angular
    .module('stockAiApp')
    .controller('AmexsCtrl', AmexsCtrl);

function AmexsCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('amexs');

    
    this.helpers({
        data() {
                return Amexs.find({});
            }
            
    });
};