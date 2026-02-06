import { useCart } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  return (
    <div className="amazon-product">
      <img src={product.image} />
      <p className="title">{product.title}</p>

      <p className="price">₹{product.price}</p>
      <p className="delivery">
        FREE Delivery by {deliveryDate.toDateString()}
      </p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
