import { useOutletContext } from "react-router-dom";
import Card from "./Card/Card";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const { featuredItems, loading } = useOutletContext();

  return (
    <div className="pt-5">
      <div className="container">
        <Headline />
        {featuredItems.length > 0 && (
          <Featured items={featuredItems} loading={loading} />
        )}
      </div>
    </div>
  );
};

const Headline = () => {
  return (
    <div className="cover position-relative text-center text-md-start text-muted bg-body border border-dashed rounded-5 p-3 p-lg-4">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <h1 className="text-body-emphasis pt-3 pt-lg-5 mb-3 mb-lg-4 fs-1 fs-lg-1 fs-md-2">
            Welcome to Fake Shop
          </h1>
          <p className="headline-text mx-auto mx-lg-0 mb-4 fs-6 fs-lg-5">
            Where shopping is more than just a click—it&apos;s an experience!
            Explore a wide range of high-quality products curated just for you,
            all at unbeatable prices. With our user-friendly interface, secure
            payment options, and lightning-fast delivery, we make your shopping
            journey effortless and enjoyable. Whether you&apos;re looking for
            the latest trends, daily essentials, or unique finds, we&apos;ve got
            everything you need in one place. Shop with confidence and let us
            bring convenience and joy to your doorstep!&quot;
          </p>
          <div className="d-grid d-sm-block mb-3 mb-lg-5">
            <button
              className="btn btn-success px-4 px-lg-5 py-2 py-lg-3"
              type="button"
            >
              <Link className="link text-decoration-none" to="/store">
                Shop Now
              </Link>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
          <img
            className="img-fluid rounded"
            src="/images/cover.jpg"
            alt="Shopping cover"
          />
        </div>
      </div>
    </div>
  );
};

const Featured = ({ items, loading }) => {
  const featuredItems = items.slice(0, 6);

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
      <div className="text-center py-5">
        <p className="fs-4">Loading.....</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="p-3 p-md-5 text-center bg-body rounded-5 mt-4 mt-lg-5 border border-dashed">
        <h1 className="text-body-emphasis pb-3 mb-4 fs-1 fs-md-1 fs-lg-1">
          Featured Items
        </h1>
        <div className="row g-3 g-md-4">
          {featuredItems.map((item) => {
            return (
              <div
                className="col-12 col-sm-6 col-lg-4 mb-2 mb-md-4"
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

export default HomeContent;
