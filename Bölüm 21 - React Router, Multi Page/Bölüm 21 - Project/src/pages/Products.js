import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "First Product" },
  { id: "p2", title: "Second Product" },
  { id: "p3", title: "Third Product" },
];

function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id} relative="">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
