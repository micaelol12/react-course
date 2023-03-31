import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title:"Test",
    price:6,
    description:"This is a first product - amazing!",
  },
  {
    title:"Test 2",
    price:12,
    description:"This is a first product - amazing!",
  },

];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      title={product.title}
      price={product.price}
      description={product.description}
      key={product.title}
    ></ProductItem>
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {products}
      </ul>
    </section>
  );
};

export default Products;
