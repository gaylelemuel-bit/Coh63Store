import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(qty) {
    console.log("Quantity changed to", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
  <div className="card h-100 border-0 shadow-sm hover-shadow transition">
    <div className="p-3 bg-light rounded-top">
      <img src={props.data.image} className="card-img-top object-fit-contain" style={{ height: "200px" }} alt={props.data.title} />
    </div>
    
     <div className="d-flex justify-content-between mt-3 mb-2">
          <span className="text-muted">Unit: ${props.data.price.toFixed(2)}</span>
          <span className="fw-bold text-primary">Total: ${getTotal()}</span>
        </div>

      <div className="mt-auto">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <QuantityPicker onChange={handleQuantityChange} />
        </div>
        <button className="btn btn-dark w-100 py-2 rounded-3 shadow-sm" type="button">
          Add to Cart
        </button>
        </div>
     </div>
);
}

export default Product;
