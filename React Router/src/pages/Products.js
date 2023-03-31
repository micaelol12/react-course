import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Products</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Boook</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
