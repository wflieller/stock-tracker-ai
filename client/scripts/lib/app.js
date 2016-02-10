if (Meteor.isClient) {
angular
  .module('stockAiApp', [
    'angular-meteor',
    'ui.router',
    'ionic'
  ]);
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['stockAiApp']);
}

}