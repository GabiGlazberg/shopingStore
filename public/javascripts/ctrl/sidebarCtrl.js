import App from '../app';

App.controller('sidebarCtrl', function ($scope, $http, $timeout, $mdSidenav) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.$watch('searchText', function (value, oldValue) {
        if (value == oldValue) return;

        $http.get(`/search/${value}`)
            .then(res => {
                return res.data;
            });
    });
});