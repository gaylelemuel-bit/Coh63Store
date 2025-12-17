import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
function Catalog(){
  const [products, setProducts]= useState([]);
  const [catergories, setCategories] = useState([]);// to hold categories//
const [productsToShow] = useState([]); // to hold products to show 


function loadCatelog(){
  let cats = ["clothing"];
  let service = new DataService();
  let data = service.getProducts();
  setProducts(data)
  setCategories(cats);
}

  useEffect(()=>{
    //load your data here
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    loadCatelog();
  },[]);// we specify how many times effect runs
  
function filter(category){
  let list = [];
  //find products that match the category 
  for (let i=0; i<products.lenghth; i++)
    {
      let prod = products[i];
      if(prod.category === category){
        list.push(prod);
      }
  }
  setProductsToShow(list);
}
function clearFilter(){
  setProductsToShow(products);
}

  
  return (
    <div className="catalog-page-container">
      <h1>Product Catalog</h1>
      { /*please render back all the products */}
      { /*create a function that clear the filter */}
      <button claassName="btn btn-dark" onClick={clearFilter}>All</button>
      <p>Browse our latest collection of apparel.</p>
      {catergories.map(cat => <button key={cat} onClick={()=>filter }>{cat} </button>)}
      {productsToShow.map(prod => <Product key={prod._id} data={prod}/>)}
      
      
    </div>
  );
};

export default Catalog;