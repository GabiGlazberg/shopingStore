import LoginService from '../servcie/loginService';
import App from '../app';

App.controller('loginCtrl', function($scope) {
    $scope.username = '';
    $scope.password = '';
    $scope.login = () => {
        // return LoginService($scope.username, $scope.password);
    }
});