import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <h1>Products Page</h1>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsPage;
