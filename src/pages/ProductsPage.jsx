import { useLoaderData } from "react-router-dom";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="products-page">
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <h1>Products Page</h1>
      <Products />
    </div>
  );
};

export default ProductsPage;
