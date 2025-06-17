import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container pt-4 pt-lg-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="text-center">
            {/* Success Icon */}
            <div className="mb-4">
              <div
                className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="display-4 fw-bold text-success mb-3">
              Order Successful!
            </h1>
            <p className="lead text-muted mb-4">
              Thank you for shopping with us! Your order has been placed
              successfully and is being processed.
            </p>

            {/* Order Details Card */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="card-title text-start mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-info-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  What happens next?
                </h5>
                <div className="text-start">
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "30px",
                        height: "30px",
                        minWidth: "30px",
                      }}
                    >
                      <span
                        className="text-white fw-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        1
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-1">Order Confirmation</h6>
                      <small className="text-muted">
                        You will receive an email confirmation within 5 minutes
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "30px",
                        height: "30px",
                        minWidth: "30px",
                      }}
                    >
                      <span
                        className="text-white fw-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        2
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-1">Processing</h6>
                      <small className="text-muted">
                        Your order will be processed within 1-2 business days
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div
                      className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "30px",
                        height: "30px",
                        minWidth: "30px",
                      }}
                    >
                      <span
                        className="text-white fw-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        3
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-1">Delivery</h6>
                      <small className="text-muted">
                        Estimated delivery: 3-5 business days
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link
                to="/store"
                className="btn btn-primary px-4 py-2 text-decoration-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="btn btn-outline-secondary px-4 py-2 text-decoration-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
                Back to Home
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-5 pt-4 border-top">
              <p className="text-muted mb-2">
                <small>Need help? Contact our customer support:</small>
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="mailto:support@fakeshop.com"
                  className="text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  support@fakeshop.com
                </a>
                <span className="text-muted d-none d-sm-inline">|</span>
                <span className="text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone me-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L8.827 11.5a.678.678 0 0 1-.606-.056l-2.154-1.123a.678.678 0 0 1-.056-.606l1.077-2.933a.678.678 0 0 0-.122-.58L4.672 2.987a.678.678 0 0 0-.58-.122z" />
                  </svg>
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
