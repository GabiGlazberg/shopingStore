import LoginService from '../servcie/loginService';

import App from '../app';

App.controller('loginCtrl', function($http, $scope, $state) {
    $scope.username = '';
    $scope.password = '';
    $scope.Login = LoginService;

    $scope.login = () => {

        const loginService = new LoginService($http);

        $scope.res = loginService.init($scope.username, $scope.password);

        $scope.res.then(user => {
            if (!user) {
                console.log('err');
                return $state.go('login');
            }

            return $state.go('home');
        }).catch(err => {
            console.log('sa')
        });

    }
});