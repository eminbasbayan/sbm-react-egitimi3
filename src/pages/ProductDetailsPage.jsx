const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <h1>Product Details Page</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
            className="img-fluid"
            alt={"product.title"}
          />
        </div>
        <div className="col-md-6">
          <h1>{"product.title"}</h1>
          <p className="lead">{"product.description"}</p>
          <h3 className="text-primary">${"product.price"}</h3>
          <button className="btn btn-success btn-lg mt-3" onClick={() => {}}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2>Customer Reviews</h2>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{"review.user"}</h5>
              <p className="card-text">{"review.comment"}</p>
              <p className="card-text">
                <small className="text-muted">
                  Rating: {"review.rating"} / 5
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
