import { useContext } from "react";
import globalContext from "../state/globalContext";
import {
  IconTrashX,
  IconCreditCard,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

function MyCart() {
  const { cart, removeProductFromCart, clearCart } = useContext(globalContext);

  const handlePayNow = (e) => {
    e.preventDefault();

    const total = getTotalPrice();
    const items = getTotalItems();

    alert(`Payment of $${total} succesful for ${items} items.`);

    if (clearCart) {
      clearCart();
    }

    e.target.reset();
  };

  function getTotalItems() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].quantity;
    }
    return sum;
  }

  function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total.toFixed(2);
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Complete My Purchase</h1>
        <div className="row">
          <div className="col-lg-8">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product._id} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <img
                        className="rounded border"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{product.title}</h5>
                        <p className="text-muted mb-0">
                          Unit Price: ${product.price}
                        </p>
                        {product.selectedSize && (
                          <small className="text-primary fw-bold">
                            Size: {product.selectedSize}
                          </small>
                        )}
                      </div>
                      <div className="text-center mx-3">
                        <span className="badge bg-light text-dark border p-2">
                          Qty: {product.quantity}
                        </span>
                      </div>
                      <div className="fw-bold fs-5 me-3">
                        ${(product.price * product.quantity).toFixed(2)}
                      </div>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeProductFromCart(product._id)}
                      >
                        <IconTrashX size={18} className="me-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-light">Your cart is empty.</div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm border-primary">
              <div className="card-body">
                <h4 className="card-title mb-4 d-flex align-items-center">
                  <IconCreditCard className="me-2" /> Payment & Summary
                </h4>
                <form onSubmit={handlePayNow}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      CARDHOLDER NAME
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      CARD NUMBER
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0000 0000 0000 0000"
                      required
                    />
                  </div>
                  <div className="row mb-4">
                    <div className="col-7">
                      <label className="form-label small fw-bold">
                        EXPIRATION
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="MM / YY"
                        required
                      />
                    </div>
                    <div className="col-5">
                      <label className="form-label small fw-bold">CVV</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Items:</span>
                    <strong>{getTotalItems()}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <span className="h5">Total to Pay:</span>
                    <span className="h5 text-primary">${getTotalPrice()}</span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg"
                  >
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="support-fab d-none d-md-flex"
        onClick={() => window.open("https://wa.me", "_blank")}
      >
        <p className="online-dot "></p>
        <IconBrandWhatsapp stroke={2} color="lime" />
        Chat
      </button>
    </>
  );
}

export default MyCart;
