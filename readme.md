# Shopping App

## routes

## api
### to use this routes the user role need to be set to admin!!
1. #### add category
- #### request:
            - method: POST
            - url: api/category/add-category
            - body:
             ```
            category_name: String;
            ```

2. #### add product
- #### request:
            - method: POST
                        - url: api/category/add-category
                        - body:
                         ```
                         category_name: String;
                         product_name: String;
                         ```