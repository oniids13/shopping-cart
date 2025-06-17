import { useOutletContext, Link } from "react-router-dom";

const CartContent = () => {
  const { cart, setCart, setTotal } = useOutletContext();
  console.log(cart);

  return <Cart cart={cart} setCart={setCart} setTotal={setTotal} />;
};

const Cart = ({ cart, setCart, setTotal }) => {
  const upddateQuantity = (id, newQty) => {
    setCart((cart) =>
      cart.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const removeToCart = (id) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const settingTotalAmt = () => {
    setTotal(totalAmount);
  };

  return (
    <div className="container pt-4 pt-lg-5 px-3 px-md-4">
      <h1 className="mb-4 fs-2 fs-md-1">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart p-4 p-md-5 text-center bg-body rounded-3 mt-4 mt-lg-5">
          <p className="fs-5 mb-4">There is nothing in your cart :(</p>
          <div className="d-grid d-sm-block">
            <button className="btn btn-success px-4 py-2">
              <Link to="/store" className="link text-decoration-none">
                Go to Store
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Mobile Card Layout */}
          <div className="d-md-none">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body">
                  <h6 className="card-title">
                    <Link
                      className="link text-primary text-decoration-none"
                      to={`/product/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  </h6>
                  <div className="row g-2 align-items-center">
                    <div className="col-6">
                      <small className="text-muted">Price:</small>
                      <div className="fw-bold">${item.price}</div>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">Quantity:</small>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        value={item.qty}
                        min="1"
                        max="10"
                        onChange={(e) =>
                          upddateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="text-muted">Total:</small>
                      <div className="fw-bold">
                        ${(item.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeToCart(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="card bg-light">
              <div className="card-body text-center">
                <h5 className="mb-0">
                  Total Amount: <strong>${totalAmount.toFixed(2)}</strong>
                </h5>
              </div>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="d-none d-md-block">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Link
                          className="link text-primary text-decoration-none"
                          to={`/product/${item.id}`}
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <input
                          className="form-control"
                          style={{ width: "80px" }}
                          type="number"
                          value={item.qty}
                          min="1"
                          max="10"
                          onChange={(e) =>
                            upddateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                      </td>
                      <td className="fw-bold">
                        ${(item.price * item.qty).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeToCart(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="table-info">
                    <td colSpan="3">
                      <strong>Total Amount:</strong>
                    </td>
                    <td colSpan="2">
                      <strong>${totalAmount.toFixed(2)}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
          <div className="d-grid d-sm-block">
            <button
              className="btn btn-success px-4 py-2"
              onClick={settingTotalAmt}
            >
              <Link to="/checkout" className="link text-decoration-none">
                Checkout
              </Link>
            </button>
          </div>
          <div className="d-grid d-sm-block">
            <button className="btn btn-info px-4 py-2">
              <Link className="link text-decoration-none" to="/store">
                Continue Shopping
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
