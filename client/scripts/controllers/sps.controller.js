angular
    .module('stockAiApp')
    .controller('SpsCtrl', SpsCtrl);

function SpsCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('sps');
    
    this.helpers({
        data() {
                return Sps.find({});
            }
            
    });
};