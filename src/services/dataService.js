const catalog = [
    {
"title":"Oversized Fleece Hoodie","category":"clothing","price":19.99,"image":"Hoodie.png",
"_id":"1", "specs": {
      "material": "100% Organic Cotton",
      "color": "Soft White",
      "care": "Machine wash cold, tumble dry low"
    },

 "reviews": [
    { "user": "Alex", "rating": 5, "comment": "Best hoodie ever!" }
  ]
    },{
    "title":"Soft Cotton T-Shirt","category":"clothing","price":9.99,"image":"putOn.png",
    "_id":"2", "specs": {
      "material": "100% Organic Cotton",
      "color": " White",
      "care": "Machine wash cold, tumble dry low"
    },

     "reviews": [
    { "user": "Ava M", "rating": 4, "comment": "I like jesus on the shirt" }
  ]
    },
    {
    "title":"Jesus Sweat-Shirt","category":"clothing","price":14.99,"image":"Jsweat.png",
    "_id":"3","specs": {
      "material": "100% Organic Cotton",
      "color": "Jet Black",
      "care": "Machine wash cold, tumble dry low"
    },

     "reviews": [
    { "user": "Mya N", "rating": 5, "comment": "very soft and comfortable!" }
  ]
    },
    {
    "title":"Jesus Sweat-Pants","category":"clothing","price":11.99,"image":"jpants.png","_id":"4","specs": {
      "material": "100% Organic Cotton",
      "color": "Jet Black",
      "care": "Machine wash cold, tumble dry low"
    },

    },
     
    {
    "title":"Cotton Sweat-Shirt","category":"clothing","price":8.99,"image":"YWH.png","_id":"5","specs": {
      "material": "100% Organic Cotton",
      "color": "Tan",
      "care": "Machine wash cold, tumble dry low"
    },

     "reviews": [
    { "user": "Q", "rating": 5, "comment": "Fits perfectly and the cotton is super soft" }
  ]
    },
    {
    "title":"Cross Beanie","category":"accessories","price":3.99,"image":"hat1.png","_id":"6","specs": {
      "material": "100% Organic Cotton",
      "color": "Cream White",
      "care": "Machine wash cold, tumble dry low"
    },

     
    },
    {
    "title":"Cross Beanie","category":"accessories","price":3.99,"image":"hat2.png","_id":"7","specs": {
      "material": "100% Organic  Cotton",
      "color": "Jet Black",
      "care": "Machine wash cold, tumble dry low"
    },

    
    },
    {
    "title":"Walk on Clouds Nikes","category":"shoes","price":89.99,"image":"shoe1.png","_id":"8","specs": {
      "material": "Flyknit Cotton",
      "color": "White/Turquiose",
      "care": "Machine wash cold, tumble dry low"
    },

     "reviews": [
    { "user": "Mattie N", "rating": 5, "comment": "literally feels like your walking on clouds!" }
  ]
    },
    {
    "title":"Jesus Running  Nikes","category":"shoes","price":49.99,"image":"shoe2.png","_id":"9","specs": {
      "material": "Flyknit Mesh ",
      "color": "White/Black/Red",
      "care": "Machine wash cold, tumble dry low"
    },
     "reviews": [
    { "user": "Leon", "rating": 4.5, "comment": "Perfect for long distance!" }
  ]
    },
];
class DataService{
    getProducts()
    {
        return catalog;
    }

};

export default DataService;