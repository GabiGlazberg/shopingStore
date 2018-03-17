import App from '../app';
import CategoryService from '../service/categoryService'
import ProductService from '../service/productService'

App.controller('categoryCtrl', function ($scope, $http) {
    $scope.categories = [];
    $scope.products = [];

    $scope.categoryName = function (categoryName) {
        var productService = new ProductService($http);
        $scope.res = productService.init(categoryName);
        $scope.res.then(res => {
            $scope.products = res;
        });
    };

    var categories = new CategoryService($http);
    $scope.res = categories.init();
    $scope.res.then(res => {
        console.log(res);
        $scope.categories = res;
    });
});