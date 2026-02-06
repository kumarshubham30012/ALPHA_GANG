import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { products } from "./data/products.js";

function App() {
  return (
    <>
      <Header />
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </>
  );
}

export default App;
