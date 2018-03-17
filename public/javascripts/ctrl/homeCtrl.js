import App from '../app';
import AuthService from '../service/authService';

App.controller('homeCtrl', function($scope, $http, $state) {

    $scope.username = 'guest';

    const authService = new AuthService($http);
    $scope.res = authService.init();
    $scope.res.then(user => {

        if (!user || user.status) {
            return $state.go('login');
        }
    
        $scope.username = user;
    });

    $state.go('home.category');
});
