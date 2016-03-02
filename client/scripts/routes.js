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
                    controller: 'StocksCtrl as stocks'
                }
            }
        })

        .state('tab.nasdaqs', {
            url: '/stocks/nasdaq',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/nasdaqs.html',
                    controller: 'NasdaqsCtrl as nasdaqs'
                }
            }
        })

        .state('tab.nasdaq', {
            url: '/stocks/nasdaq/:stockId',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/stock.html',
                    controller: 'NasdaqCtrl as stock'
                }
            }
        })

        .state('tab.nyses', {
            url: '/stocks/nyse',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/nyses.html',
                    controller: 'NysesCtrl as nyses'
                }
            }
        })

        .state('tab.nyse', {
            url: '/stocks/nyse/:stockId',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/stock.html',
                    controller: 'NyseCtrl as stock'
                }
            }
        })

        .state('tab.amexs', {
            url: '/stocks/amex',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/amexs.html',
                    controller: 'AmexsCtrl as amexs'
                }
            }
        })

        .state('tab.amex', {
            url: '/stocks/amex/:stockId',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/stock.html',
                    controller: 'AmexCtrl as stock'
                }
            }
        })

        .state('tab.sps', {
            url: '/stocks/sp',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/sps.html',
                    controller: 'SpsCtrl as sps'
                }
            }
        })

        .state('tab.sp', {
            url: '/stocks/sp/:stockId',
            views: {
                'tab-stocks': {
                    templateUrl: 'client/templates/stock.html',
                    controller: 'SpCtrl as stock'
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
        })

    .state('login', {
        url: '/login',
        templateUrl: 'client/templates/login.html'
    });



    $urlRouterProvider.otherwise('tab/stocks');
}
