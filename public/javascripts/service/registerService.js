class RegisterService
{
    constructor ($http) {
        this.http = $http
    }
    init (formData) {
        return this.http({
            method: 'POST',
            url: '/register',
            data: formData
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        });
    } 
}

export default RegisterService;

