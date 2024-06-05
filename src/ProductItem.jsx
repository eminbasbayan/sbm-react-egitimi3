const productItemCss = {
  border: "1px solid #eee",
  width: "250px",
}

function ProductItem() {
  return (
    <div
      className="product-item"
      style={productItemCss}
    >
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product title"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover"
          }}
        />
      </div>
      <div
        className="product-info"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "12px",
        }}
      >
        <strong>Title</strong>
        <span>200₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
