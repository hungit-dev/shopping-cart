import styles from "../styles/Cart.module.css";
import { useOutletContext } from "react-router-dom";
import { CartItem } from "./Item";

const Cart = () => {
  const { cartItems } = useOutletContext();
  const { handleRemoveItemFromCart } = useOutletContext();
  const { handleIncreaseQuantityInCart } = useOutletContext();
  const { handleDecreaseQuantityInCart } = useOutletContext();
  let isEmpty = true; //If cart has no item, its empty
  if (cartItems.length > 0) {
    isEmpty = false;
  }
  //calculate total money based on the number of products
  const total = cartItems
    .reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  console.log(cartItems);
  return (
    <>
      <div className={styles.cart}>
        {/*Display a message if the cart is empty */}
        {isEmpty && <h1> Your cart is empty 🛒</h1>}

        <div className={styles.cartItemsContainer}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              img={item.src}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              id={item.id}
              handleRemove={handleRemoveItemFromCart}
              handleDecreaseQuantityInCart={handleDecreaseQuantityInCart}
              handleIncreaseQuantityInCart={handleIncreaseQuantityInCart}
            />
          ))}
        </div>
        {total > 0 && <div className={styles.total}>Total: ${total}</div>}
      </div>
    </>
  );
};
export default Cart;
