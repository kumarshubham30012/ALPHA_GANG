import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="amazon-header">
      <h2 className="logo">amazon</h2>

      <input
        className="search"
        placeholder="Search Amazon.in"
      />

      <div className="cart-icon">
        🛒
        <span className="cart-count">{totalItems}</span>
      </div>
    </header>
  );
};

export default Header;
