function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product title"
          width={200}
        />
      </div>
      <div className="product-info">
        <strong>Title</strong>
        <span>200₺</span>
      </div>
    </div>
  );
}

export default ProductItem
