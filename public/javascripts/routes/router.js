import App from '../app';
import LoginService from '../servcie/loginService';

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
        templateUrl: 'javascripts/template/register-form1.html'
    })

    .state('register.address', {
        url: '/address',
        templateUrl: 'javascripts/template/register-form2.html'
    })

    .state('home', {
        url: '/home',
        templateUrl: 'javascripts/template/home.html',
        resolve: {
            loginService: 'LoginService'
        },
        controller: function($state, LoginService) {
            if (!LoginService) $state.go('login');
        }
    });

});