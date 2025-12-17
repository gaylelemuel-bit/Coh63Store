const catalog = [
    {
"title":"Hoodie","category":"clothing","price":19.99,"image":"Hoodie.png",
"_id":"1",
    },{
    "title":"tShirt","category":"clothing","price":9.99,"image":"putOn.png",
    "_id":"2",
    },
    {
    "title":"sweatShirt","category":"clothing","price":14.99,"image":"Jsweat.png",
    "_id":"3",
    },
    {
    "title":"sweatpants","category":"clothing","price":11.99,"image":"jpants.png","_id":"4",
    },
    {
    "title":"tShirt","category":"clothing","price":8.99,"image":"YWH.png","_id":"5",
    },
    {
    "title":"hat","category":"accessories","price":3.99,"image":"hat1.png","_id":"6",
    },
    {
    "title":"hat","category":"accessories","price":3.99,"image":"hat2.png","_id":"7",
    },
    {
    "title":"nikes","category":"shoes","price":89.99,"image":"shoe1.png","_id":"8",
    },
    {
    "title":"nikes","category":"shoes","price":49.99,"image":"shoe2.png","_id":"9",
    },
];
class DataService{
    getProducts()
    {
        return catalog;
    }

};

export default DataService;