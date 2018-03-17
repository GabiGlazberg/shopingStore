import App from '../app';

App.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    
    .state('login', {
        url: '/',
        templateUrl: 'javascripts/template/login.html',
    })

    .state('register', {
        url: '/register',
        templateUrl: 'javascripts/template/register.html',
        controller: 'registerCtrl'
    })

    .state('register.profile', {
        url: '/profile',
        templateUrl: 'javascripts/template/partial/register-form1.html'
    })

    .state('register.address', {
        url: '/address',
        templateUrl: 'javascripts/template/partial/register-form2.html'
    })

    .state('home', {
        url: '/home',
        templateUrl: 'javascripts/template/home.html',
        controller: 'loginCtrl'
    })

    .state('home.category', {
        url: '/category',
        templateUrl: 'javascripts/template/category.html',
        controller: 'categoryCtrl'
    });

});