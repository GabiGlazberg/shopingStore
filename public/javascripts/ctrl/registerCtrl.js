import App from '../app';
import RegisterService from '../service/registerService'

App.controller('registerCtrl', function($http, $scope, $state, registerFactory) {
    $scope.routeFlag = {};
    $scope.formData = {};
    
    if (!$scope.routeFlag.firstTime) {
        $scope.routeFlag.firstTime = true;
        $state.go('register.profile');
    }

    $scope.registerTheForm = () => {
        $scope.registerFactory = registerFactory.returnValue($scope.formData);
        
        if (!$scope.registerFactory) return;

        const registerService = new RegisterService($http);

        $scope.res = registerService.init($scope.formData);

        $scope.res.then(user => {
            if (!user) {
                return $state.go('register');
            }

            return $state.go('home');
        });
    }
});
