import { useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    const [quantity, setQuantity,] = useState(1);
    function handleQuantityChange(quantity){
        console.log("quantity changed to",quantity);
        setQuantity(quantity);

    }

    function getTotal(){
        let total = props.data.price * quantity;

return total.toFixed(2);   
 }

    return(
     <> 
     <div className="product-details">
  <h1>Oversize Fleeced Hoodie</h1>
  <h2>{props.data.title}</h2>
  <img src={props.data.image} alt="oversized hoodie" />
  </div> 
  <div className="rating">
    ★★★★☆ <span>(42 reviews)</span>
  </div>
  <div className="price">
    <label>{props.data.price.toFixed(2)}</label>
    <label>{getTotal()}</label>
  </div>
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
    <div className="quantity">
        <QuantityPicker onChange={handleQuanityChange} />
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
  <div className="product-details">
  <h1> G2G T-Shirt</h1>
  <img src="putOn.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★★ <span>(62 reviews)</span>
  </div>
  <p classname="price">$14.99</p>
  <p>
    {" "}
    Made from premium 100% cotton, this tee offers breathability, durability, and long-lasting comfort. Whether you’re showcasing bold graphics or subtle designs, this t-shirt is your canvas to make a lasting impression.
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
    <div className="quantity">
        <QuantityPicker/>
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
      <p>— Ava M (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
       I like jesus on the shirt and it looks very soft i wish i could wear it every day
      </p>
    </article>
  </section>
  <div className="product-details">
  <h1>Enzyme Washed T-Shirt</h1>
  <img src="Pwr.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★☆ <span>(62 reviews)</span>
  </div>
  <p classname="price">$8.99</p>
  <p>
    {" "}
    Enzyme Washed T-Shirt features a vintage-inspired look achieved through enzyme washing, a more eco-conscious alternative to traditional chemical processes. This unisex style offers a durable, print-ready surface, ideal for custom branding and elevating everyday collections. DTG printing is supported.
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
    <div className="quantity">
        <QuantityPicker/>
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
          <td>Cool Grey</td>
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
      <p>— Mya N (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        It is very soft and comfortable!
      </p>
    </article>
  </section>
  <div className="product-details">
  <h1> Jesus Crewneck</h1>
  <img src="Jsweat.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★☆ <span>(45 reviews)</span>
  </div>
  <p classname="price">$17.99</p>
  <p>
    {" "}
    This essential long-sleeve tee is crafted from a soft 85% cotton and 15% polyester blend, offering a lightweight feel with enhanced durability. Its classic crewneck and versatile fit make it a perfect layering piece or standalone basic. Recommended for core collections, especially with its subtle jasmine scent finish for an elevated consumer experience.
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
    <div className="quantity">
        <QuantityPicker/>
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
          <td>Black</td>
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
      <h3>"Soft and Warm!"</h3>
      <p>— Mattie N (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
    I love to wear it every day!
      </p>
    </article>
  </section>
  <div className="product-details">
  <h1>Jesus Sweatpants</h1>
  <img src="jpants.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★★ <span>(22 reviews)</span>
  </div>
  <p classname="price">$10.99</p>
  <p>
    {" "}
    Crafted from soft washed fleece, these straight-leg sweatpants feature distressed hems and pocket edges for a vintage streetwear vibe. Designed as a unisex style, they pair effortlessly with matching hoodie #RW0008 for a complete, coordinated look. Available in multiple colors, this versatile set supports custom printing for everyday wear or unique branding.
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
    <div className="quantity">
        <QuantityPicker/>
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
          <td>Black</td>
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
      <h3>"Super soft!"</h3>
      <p>— Lemuel E (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        Fits perfectly and the cotton is super
        soft.
      </p>
    </article>
  </section>
  <div className="product-details">
  <h1>Oversize Hoodie</h1>
  <img src="INJ.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★☆ <span>(32 reviews)</span>
  </div>
  <p classname="price">$24.99</p>
  <p>
    {" "}
    A modern staple for the Essential collection, this hoodie is crafted from a 420g/m² Heavyweight fabric for a premium, structured feel. The Oversize fit provides a contemporary silhouette, which can be customized via the functional Drawstring Hem. This detail allows the wearer to adjust the shape and drape. Position this as a versatile, high-quality basic that pairs seamlessly with the RK0009 bottom for a complete, elevated casual set.
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
    <div className="quantity">
        <QuantityPicker/>
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
          <td>Black</td>
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
      <h3>"Fit and quality!"</h3>
      <p>— Leon G (Verified Buyer)</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        Really happy with this hoodie, fits perfectly and the cotton is super
        soft.
      </p>
    </article>
  </section>
  <div className="product-details">
  <h1>Oversize SweatShirt</h1>
  <img src="YWH.png" alt="oversized TShirt" />
  </div>
  <div classname="rating">
    ★★★★☆ <span>(12 reviews)</span>
  </div>
  <p classname="price">$29.99</p>
  <p>
    {" "}
    heavyweight crewneck crafted from 100% cotton, It offers exceptional softness, durability, breathability and lasting comfort. With a relaxed drop-shoulder design and DTG printing support, it’s a stylish, eco-friendly everyday choice.
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
    <div className="quantity">
        <QuantityPicker/>
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
          <td>Brown</td>
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