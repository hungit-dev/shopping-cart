import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { CartItem } from "./Item";

const Cart=()=>{
    const {cartItems}=useOutletContext();
    const {handleRemoveItemFromCart}=useOutletContext()
    const {handleIncreaseQuantityInCart}=useOutletContext()
    const {handleDecreaseQuantityInCart}=useOutletContext()
    let isEmpty=true; //check if the cart is empty
    if(cartItems.length>0){
         isEmpty=false;
    }
    console.log(cartItems)
    return (
        <>
        <div className={styles.cart}>
            {/*Display a message if the cart is empty */}
        {isEmpty && <h1 > Your cart is empty 🛒</h1>}
        <div></div>
        <div className={styles.cartItemsContainer}>
        {cartItems.map((item)=>(
                
                     <CartItem  key={item.id} img={item.src} price={item.price} title={item.title} quantity={item.quantity} id={item.id} handleRemove={handleRemoveItemFromCart} handleDecreaseQuantityInCart={handleDecreaseQuantityInCart} handleIncreaseQuantityInCart={handleIncreaseQuantityInCart}/>
                
                 ))}
        </div>
        </div>
        </>
    )
}
export default Cart