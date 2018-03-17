class AuthService {

    constructor($http) {
        this.http = $http;
    }

    init () {
        return this.http.get(
            '/home'
        ).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        });
    }

}
export default AuthService;
