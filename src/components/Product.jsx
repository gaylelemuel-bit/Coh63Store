import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product(){
    return(
        <>
  <h1>Oversize Fleeced Hoodie</h1>
  <img src="Hoodie.png" alt="oversized hoodie" />
  <div classname="rating">
    ★★★★☆ <span>(42 reviews)</span>
  </div>
  <p classname="price">$29.99</p>
  <p>
    {" "}
    Oversize Fleeced Hoodie is a game-changer. With its ultra-soft fleece and
    bold oversized fit, it’s the perfect piece to elevate any collection. Ideal
    for custom prints, this hoodie combines unbeatable comfort with premium
    quality.
  </p>
  <form classname="form-container">
    <label classname="size-container">Size:</label>
    <select classname="size" required="">
      <option value="select">--select--</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
      <option value="XXXL">XXXL</option>
    </select>
    <div classname="quantity">
      <quantitypicker></quantitypicker>
    </div>
    <button classname="cart" type="submit">
      Add to Cart
    </button>
  </form>
  <section classname="product-specs">
    <h2>Specifications</h2>
    <table>
      <caption>Detailed material and care instructions</caption>
      <tbody>
        <tr>
          <th>Material</th>
          <td>100% Organic Cotton</td>
        </tr>
        <tr>
          <th>Color</th>
          <td>White</td>
        </tr>
        <tr>
          <th>Care Instructions</th>
          <td>Machine wash cold, tumble dry low.</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section classname="reviews">
    <h2>Customer Reviews</h2>
    <article classname="review-content">
      <h3>"Great fit and quality!"</h3>
      <p>— John Doe (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        Really happy with this hoodie, fits perfectly and the cotton is super
        soft.
      </p>
    </article>
  </section>
</>

    )
}

export default Product;