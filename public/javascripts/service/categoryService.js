class CategoryService {

    constructor($http) {
        this.http = $http;
    }

    init () {
        return this.http.get(
            '/get-categories'
        ).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        });
    }

}
export default CategoryService;
