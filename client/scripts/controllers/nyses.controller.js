angular
    .module('stockAiApp')
    .controller('NysesCtrl', NysesCtrl);

function NysesCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('nyses');
    
    this.helpers({
        data() {
                return Nyses.find({});
            }
            
    });
};