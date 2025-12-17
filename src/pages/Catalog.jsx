import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import Product from "../components/Product"; 

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]); 

  function loadCatalog() {
    let service = new DataService();
    let data = service.getProducts();
    
    setProducts(data);
    setProductsToShow(data); // Show all products by default on load
    
    // Extract unique categories from data if they aren't hardcoded
    let cats = ["clothing"]; 
    setCategories(cats);
  }

  useEffect(() => {
    loadCatalog();
  }, []);

  function filter(category) {
    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProductsToShow(list);
  }

  function filter(category) {
  // .filter() creates a new array with only matching items
  let list = products.filter(prod => prod.category === category);
  setProductsToShow(list);
}

  function clearFilter() {
    setProductsToShow(products);
  }
 
return (
  <div className="catalog-page-container container-fluid py-5 px-lg-5">
    <header className="text-center mb-5">
      <h1 className="display-4 fw-bold text-dark">Our Collection</h1>
      <p className="lead text-muted">Premium apparel designed for comfort and style.</p>
      
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
        <button className="btn btn-outline-dark rounded-pill px-4 shadow-sm" onClick={clearFilter}>All</button>
        <button className="btn btn-outline-dark rounded-pill px-4 shadow-sm" onClick={() => filter("clothing")}>Clothing</button>
        <button className="btn btn-outline-dark rounded-pill px-4 shadow-sm" onClick={() => filter("shoes")}>Shoes</button>
        <button className="btn btn-outline-dark rounded-pill px-4 shadow-sm" onClick={() => filter("accessories")}>Accessories</button>
      </div>
    </header>

    <div className="row g-4">
      {productsToShow.map(prod => (
        <div key={prod._id} className="col-12 col-lg-4 col-xl-3">
          <Product data={prod} />
        </div>
      ))}
    </div>
  </div>
);
}

export default Catalog;
