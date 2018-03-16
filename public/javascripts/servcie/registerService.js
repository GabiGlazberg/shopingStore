var App = require('../app');

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
            return false;
        });
    } 
}

export default RegisterService;

// export default App.service('registerService', function ($http) {
//     return function (formData) {
//         if (!formData) return;
//         return $http({
//             method: 'POST',
//             url: '/register',
//             data: formData
//         }).then(res => {
//             return res.data;
//         }).catch(err => {
//             return false;
//         });
//     }
// });
