import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const CheckOutContent = () => {
  const { cart, total } = useOutletContext();

  console.log(cart);

  return <Checkout cart={cart} total={total} />;
};

const Checkout = ({ cart, total }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    city: "",
    zip: "",
    paymentMethod: "credit",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCvv: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (!formData.city) {
      newErrors.city = "Please select a city";
    }

    if (!formData.zip.trim()) {
      newErrors.zip = "Zip code is required";
    } else if (!/^\d{4}$/.test(formData.zip)) {
      newErrors.zip = "Please enter a valid 4-digit zip code";
    }

    // Email validation (optional but if provided, must be valid)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Payment validation
    if (!formData.ccName.trim()) {
      newErrors.ccName = "Name on card is required";
    }

    if (!formData.ccNumber.trim()) {
      newErrors.ccNumber = "Credit card number is required";
    } else if (!/^\d{16}$/.test(formData.ccNumber.replace(/\s/g, ""))) {
      newErrors.ccNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.ccExpiration.trim()) {
      newErrors.ccExpiration = "Expiration date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.ccExpiration)) {
      newErrors.ccExpiration = "Please enter date in MM/YY format";
    }

    if (!formData.ccCvv.trim()) {
      newErrors.ccCvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.ccCvv)) {
      newErrors.ccCvv = "Please enter a valid 3-4 digit CVV";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);

      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.focus();
      }
      return;
    }

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      // Form is valid, navigate to success page
      window.location.href = "/success";
    }, 2000);
  };

  const formatCardNumber = (value) => {
    // Remove all non-digits
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    // Add spaces every 4 digits
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiration = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <>
      <div className="container mt-4 mt-lg-5 pb-5">
        <div className="row g-4 g-lg-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">
                    {cart.length}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <li
                      className="list-group-item d-flex justify-content-between lh-sm border-0 px-0"
                      key={item.id}
                    >
                      <div>
                        <h6 className="my-0 fs-6">{item.title}</h6>
                        <small className="text-muted">Qty: {item.qty}</small>
                      </div>
                      <span className="text-body-secondary fw-semibold">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between border-0 px-0 pt-3 border-top">
                    <span className="fw-bold">Total (USD)</span>
                    <strong className="text-success">${total}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-credit-card me-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              Billing Information
            </h4>

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName
                        ? "is-invalid"
                        : formData.firstName
                        ? "is-valid"
                        : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName
                        ? "is-invalid"
                        : formData.lastName
                        ? "is-valid"
                        : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email
                        ? "is-invalid"
                        : formData.email
                        ? "is-valid"
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.address
                        ? "is-invalid"
                        : formData.address
                        ? "is-valid"
                        : ""
                    }`}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="1234 Main St"
                    required
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`form-select ${
                      errors.country
                        ? "is-invalid"
                        : formData.country
                        ? "is-valid"
                        : ""
                    }`}
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="philippines">Philippines</option>
                  </select>
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label htmlFor="city" className="form-label">
                    City <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`form-select ${
                      errors.city
                        ? "is-invalid"
                        : formData.city
                        ? "is-valid"
                        : ""
                    }`}
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="manila">Manila</option>
                    <option value="quezon-city">Quezon City</option>
                    <option value="caloocan-city">Caloocan City</option>
                    <option value="davao-city">Davao City</option>
                    <option value="cebu-city">Cebu City</option>
                    <option value="zamboanga-city">Zamboanga City</option>
                    <option value="iloilo-city">Iloilo City</option>
                    <option value="bacolod-city">Bacolod City</option>
                  </select>
                  {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip Code <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.zip ? "is-invalid" : formData.zip ? "is-valid" : ""
                    }`}
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="1234"
                    maxLength="4"
                    required
                  />
                  {errors.zip && (
                    <div className="invalid-feedback">{errors.zip}</div>
                  )}
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-credit-card-2-front me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                </svg>
                Payment Method
              </h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="credit"
                    checked={formData.paymentMethod === "credit"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="credit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-credit-card me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="debit"
                    checked={formData.paymentMethod === "debit"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="debit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-credit-card me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-paypal me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.635.709 1.405.618 2.187-.061.51-.231.993-.505 1.421-.297.46-.673.838-1.085 1.08-.45.262-1.001.407-1.714.407-.18.006-.357.01-.53.01h-.015a.383.383 0 0 0-.378.323l-.73 4.665a.31.31 0 0 1-.309.262H4.14a.25.25 0 0 1-.25-.25c.02-.137.031-.276.031-.417V8.79c-.001-.246.154-.986.622-.97Z" />
                    </svg>
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="ccName" className="form-label">
                    Name on card <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.ccName
                        ? "is-invalid"
                        : formData.ccName
                        ? "is-valid"
                        : ""
                    }`}
                    id="ccName"
                    name="ccName"
                    value={formData.ccName}
                    onChange={handleInputChange}
                    placeholder="Full name as displayed on card"
                    required
                  />
                  {errors.ccName && (
                    <div className="invalid-feedback">{errors.ccName}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="ccNumber" className="form-label">
                    Credit card number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.ccNumber
                        ? "is-invalid"
                        : formData.ccNumber
                        ? "is-valid"
                        : ""
                    }`}
                    id="ccNumber"
                    name="ccNumber"
                    value={formatCardNumber(formData.ccNumber)}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        ccNumber: e.target.value,
                      }))
                    }
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                  />
                  {errors.ccNumber && (
                    <div className="invalid-feedback">{errors.ccNumber}</div>
                  )}
                </div>

                <div className="col-md-3">
                  <label htmlFor="ccExpiration" className="form-label">
                    Expiration <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.ccExpiration
                        ? "is-invalid"
                        : formData.ccExpiration
                        ? "is-valid"
                        : ""
                    }`}
                    id="ccExpiration"
                    name="ccExpiration"
                    value={formatExpiration(formData.ccExpiration)}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        ccExpiration: e.target.value,
                      }))
                    }
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                  {errors.ccExpiration && (
                    <div className="invalid-feedback">
                      {errors.ccExpiration}
                    </div>
                  )}
                </div>

                <div className="col-md-3">
                  <label htmlFor="ccCvv" className="form-label">
                    CVV <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.ccCvv
                        ? "is-invalid"
                        : formData.ccCvv
                        ? "is-valid"
                        : ""
                    }`}
                    id="ccCvv"
                    name="ccCvv"
                    value={formData.ccCvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    required
                  />
                  {errors.ccCvv && (
                    <div className="invalid-feedback">{errors.ccCvv}</div>
                  )}
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-primary btn-lg d-flex align-items-center justify-content-center"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Processing Order...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-lock-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
                    Complete Secure Payment
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutContent;
