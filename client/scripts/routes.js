angular
    .module('stockAiApp')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/tabs.html',

        })
        .state('tab.stocks', {
                url: '/stocks',
                views: {
                    'tab-stocks': {
                        templateUrl: 'client/templates/stocks.html',
                        controller: 'StocksCtrl as stocks',

                    }
                  }
                })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'client/templates/settings.html'
                    }
                }
            })
            .state('tab.watchlist', {
                url: '/watchlist',
                views: {
                    'tab-watchlist': {
                        templateUrl: 'client/templates/watchlist.html'
                    }
                }
            })
            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'client/templates/profile.html'
                    }
                }
            })
            .state('tab.trending', {
                url: '/trending',
                views: {
                    'tab-trending': {
                        templateUrl: 'client/templates/trending.html'
                    }
                }
            });

            $urlRouterProvider.otherwise('tab/stocks');
        }
