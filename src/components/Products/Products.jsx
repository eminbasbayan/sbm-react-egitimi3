import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const image =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  const title = "Tişört";
  const price = 200;

  return (
    <div className="products-wrapper">
      <h2>Products</h2>
      <div className="products">
        <ProductItem image={image} title={title} price={price} />
        <ProductItem
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          title="Gömlek"
          price={500}
        />
      </div>
    </div>
  );
}

export default Products;
