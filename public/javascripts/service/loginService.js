class LoginService {

    constructor($http) {
        this.http = $http;
    }

    init (username, password) {
        return this.http({
            method: 'POST',
            url: '/login',
            data: {username, password}
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        });
    }

}
export default LoginService;
