import App from '../app';

App.controller('sidebarCtrl', function ($scope, $http, $timeout, $mdSidenav) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.searchProducts = [];

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.$watch('searchText', function (value, oldValue) {
        if (value == oldValue) return;

        $http.get(`/get-products/search/?search_product=${value}`)
            .then(res => {
                return $scope.searchProducts = res.data;
            });
    });
});