import App from '../app';
import RegisterService from '../servcie/registerService'

App.controller('registerCtrl', function($http, $scope, $state, registerFactory) {
    $scope.routeFlag = {};
    $scope.formData = {};
    
    if (!$scope.routeFlag.firstTime) {
        $scope.routeFlag.firstTime = true;
        $state.go('register.profile');
    }

    $scope.disableTheForm = false;

    $scope.registerTheForm = () => {
        $scope.registerFactory = registerFactory.returnValue($scope.formData);
        
        if (!$scope.registerFactory) return;

        const registerService = new RegisterService($http);
        registerService.init($scope.formData);
        if (registerService) {
            $state.go('home');
        }        
    }
});
