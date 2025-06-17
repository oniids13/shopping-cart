import { useOutletContext } from "react-router-dom";
import Card from "./Card/Card";

const StoreContent = () => {
  const { products, loading } = useOutletContext();

  return (
    <>
      <Products products={products} loading={loading} />
    </>
  );
};

const Products = ({ products, loading }) => {
  const starRating = (rating) => {
    let star;
    switch (Math.floor(rating)) {
      case 5:
        star = "⭐⭐⭐⭐⭐";
        break;
      case 4:
        star = "⭐⭐⭐⭐ ";
        break;
      case 3:
        star = "⭐⭐⭐";
        break;
      case 2:
        star = "⭐⭐";
        break;
      case 1:
        star = "⭐";
    }

    return star;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center container py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-4 pt-lg-5">
      <div className="p-3 p-md-5 text-center bg-body rounded-3 mt-4 mt-lg-5">
        <h1 className="text-body-emphasis pb-3 mb-4 fs-1 fs-md-1 fs-lg-1">
          Our Products
        </h1>
        <div className="row g-3 g-md-4 justify-content-center">
          {products.map((item) => {
            return (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 mb-md-4 d-flex justify-content-center"
                key={item.id}
              >
                <Card
                  id={item.id}
                  name={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                  rating={`${starRating(item.rating.rate)} (${
                    item.rating.count
                  })`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
