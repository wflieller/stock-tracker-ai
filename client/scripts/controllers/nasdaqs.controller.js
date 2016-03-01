angular
    .module('stockAiApp')
    .controller('NasdaqsCtrl', NasdaqsCtrl);

function NasdaqsCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.searchText = '';


    this.subscribe('nasdaqs', () => {
        return [{}, this.getReactively('searchText')]
    });


    this.helpers({
        data() {
            return Nasdaqs.find({});
        }

    });
};
