// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'ionic.service.core',
  'ionic.service.analytics'
])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {
    $ionicAnalytics.register();

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //remove view transitions
    //$ionicConfigProvider.views.transition('none');

    //no caching
    //$ionicConfigProvider.views.maxCache(0);



    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
  /*
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
            cache: false,
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:

        .state('tab.news', {
            cache: false,
            url: '/news',
            views: {
                'tab-news': {
                    templateUrl: 'templates/tab-news.html',
                    controller: 'NewsCtrl'
                }
            }
        })

        .state('tab.news-detail', {
            cache: false,
            url: '/news/:newsId',
            views: {
                'tab-news': {
                    templateUrl: 'templates/news-detail.html',
                    controller: 'NewsDetailCtrl'
                }
            }
        })

        .state('tab.chats', {
            cache: false,
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            cache: false,
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })

        .state('tab.account', {
            cache: false,
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/news');

    */
});
