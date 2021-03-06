// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'chart.js', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.activities', {
    url: '/activities',
    views: {
      'tab_activities': {
        templateUrl: 'templates/activities.html',
        controller: 'activitiesCtrl'
      }
    }
  })

  .state('app.selections', {
    url: '/selections',
    views: {
      'tab_selections': {
        templateUrl: 'templates/selections.html',
        controller: 'selectionsCtrl'
      }
    }
  })

  .state('app.favourites', {
    url: '/favourites',
    views: {
      'tab_favourites': {
        templateUrl: 'templates/favourites.html',
        controller: 'favouriteCtrl'
      }
    }
  })

  .state('app.following', {
    url: '/following',
    views: {
      'tab_following': {
        templateUrl: 'templates/following.html',
        controller: 'followingCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile/:foodieKey',
    views: {
      'tab_profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('app.restaurant', {
    url: '/restaurant',
    views: {
      'tab_restaurant': {
        templateUrl: 'templates/restaurant.html',
        controller: 'restaurantCtrl'
      }
    }
  })

  .state('app.test', {
    url: '/test',
    views: {
      'tab_test': {
        templateUrl: 'templates/test.html',
        controller: 'testCtrl'
      }
    }
  })

  .state('app.article', {
    url: '/article/:articleKey',
    views: {
      'page_article': {
        templateUrl: 'templates/article.html',
        controller: 'articleCtrl'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/activities');
});
