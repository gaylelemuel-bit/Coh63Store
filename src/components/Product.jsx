import { useState } from "react";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  // Helper to render star strings (e.g., 5 -> ★★★★★)
  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="card h-100 border-0 shadow-sm transition hover-shadow">
      {/* Product Image Section */}
      <div className="p-3 bg-light rounded-top text-center">
        <img 
          src={props.data.image} 
          className="card-img-top object-fit-contain" 
          style={{ height: "180px" }} 
          alt={props.data.title} 
        />
      </div>

      <div className="card-body d-flex flex-column">
        {/* Category Badge */}
        <span className="badge bg-secondary-subtle text-secondary text-uppercase mb-2" style={{width: 'max-content'}}>
          {props.data.category}
        </span>

        {/* Dynamic Title */}
        <h5 className="card-title fw-bold mb-1">{props.data.title}</h5>

        {/* NEW: Collapsible Specifications Section */}
        {props.data.specs && (
          <details className="mt-2 mb-3 border rounded p-2">
            <summary className="small fw-bold text-muted pointer">Product Details</summary>
            <div className="mt-2 small text-muted">
              <div className="d-flex justify-content-between border-bottom pb-1 mb-1">
                <span>Material:</span>
                <span className="text-dark fw-medium">{props.data.specs.material}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom pb-1 mb-1">
                <span>Color:</span>
                <span className="text-dark fw-medium">{props.data.specs.color}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Care:</span>
                <span className="text-dark fw-medium text-end">{props.data.specs.care}</span>
              </div>
            </div>
          </details>
        )}
        
        {/* REVIEWS SECTION */}
        <div className="mb-3">
          {props.data.reviews && props.data.reviews.length > 0 ? (
            <div className="review-list">
              <small className="text-muted fw-bold d-block mb-1">
                Reviews ({props.data.reviews.length})
              </small>
              {/* We show only the first review to keep the card clean, or map all */}
              {props.data.reviews.slice(0, 1).map((rev, index) => (
                <div key={index} className="bg-light p-2 rounded small">
                  <div className="text-warning mb-1">{renderStars(rev.rating)}</div>
                  <p className="mb-0 text-dark italic">"{rev.comment}"</p>
                  <cite className="text-muted" style={{fontSize: '0.75rem'}}>— {rev.user}</cite>
                </div>
              ))}
            </div>
          ) : (
            <small className="text-muted italic">No reviews yet.</small>
          )}
        </div>
        
        {/* Pricing Details */}
        <div className="d-flex justify-content-between align-items-center mt-auto mb-3">
          <span className="text-muted small">Unit: ${props.data.price.toFixed(2)}</span>
          <span className="fw-bold text-primary fs-5">Total: ${getTotal()}</span>
        </div>

        {/* Quantity and Actions */}
        <div className="mt-auto">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <QuantityPicker onChange={handleQuantityChange} />
          </div>
          <button className="btn btn-dark w-100 py-2 rounded-3 shadow-sm" type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

