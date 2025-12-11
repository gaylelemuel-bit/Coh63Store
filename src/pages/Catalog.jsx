import Product from "../components/Product";
import "./Catalog.css";


function Catalog(){
  return (
    <div className="catalog-page-container">
      <h1>Product Catalog</h1>
      <p>Browse our latest collection of apparel.</p>
      <Product/>
      
    </div>
  );
};

export default Catalog;