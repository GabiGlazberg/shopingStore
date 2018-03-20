class ProductService {

    constructor($http) {
        this.http = $http;
    }

    init (category) {
        return this.http.get(
            `/get-products/by-category/?category_name=${category}`
        ).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        });
    }
}
export default ProductService;