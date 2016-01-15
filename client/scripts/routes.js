angular
  .module('stockAiApp')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.stocks', {
      url: '/stocks',
      views: {
        'tab-stocks': {
          templateUrl: 'client/templates/stocks.html'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/stocks');
}