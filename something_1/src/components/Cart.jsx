import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice } = useCart();

  return (
    <div className="amazon-cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>Your Amazon Cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-row">
          <img src={item.image} />

          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <h3>Subtotal: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
