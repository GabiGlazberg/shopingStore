import App from '../app';

App.directive('sidebar', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'javascripts/template/partial/sidebar.html',
    }
});
