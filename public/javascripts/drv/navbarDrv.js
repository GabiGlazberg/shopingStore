import App from '../app';

App.directive('navbar', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'javascripts/template/partial/navbar.html',
    }
});
