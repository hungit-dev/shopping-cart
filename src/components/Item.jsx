import styles from "./Item.module.css";
import { useState } from "react";
import removeIcon from "../assets/icons/remove-item-icon.svg";
//item component for home page
const FeaturedItem=({img,title,price})=>{
    
    return (
        <>
        <div className={styles.featuredItem}>
          <img src={img} alt={title} width={80} height={110} />
          <h3>{title}</h3>
          <div>
          <p>{price}$</p>
          </div>
        </div>
        </>
    )
}

//item component for shop page
const ShopItem=({img,title,price,handleAddToCart})=>{
  
  const [quantity,setQuantity]=useState(1)//run every time the component gets mounted
  
    //increase , decrease the value of input(quantity)
    const handleDecrement=()=>{
      if(quantity>1){
        setQuantity(quantity-1)
      }
    }
    const handleIncrement=()=>{
      setQuantity(quantity+1)

    }
    return (
        <>
        <div className={styles.shopItem}>
          <img src={img} alt={title} width={80} height={110} />
          <h3>{title}</h3>
          <div>
          <p>{price}$</p>
          </div>
          <div className={styles.quantitySelector}>
            <button onClick={handleDecrement}>-</button>
           <input type="number" value={quantity} min={1}/>
           <button onClick={handleIncrement}>+</button>
           </div>
           <button onClick={()=>{handleAddToCart(title,img,quantity,price)}}>Add To Cart</button>
        </div>
        </>
    )
}

//item component for cart page
const CartItem=({img,title,price,quantity,handleRemove,id,handleIncreaseQuantityInCart,handleDecreaseQuantityInCart})=>{
  return (
    <>     
           <div className={styles.cartItem}>
            <div className={styles.infoWrapper}>
                <img src={img} alt={title} width={50} height={70}/>
                <div className={styles.productInfo}>
                    <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                    <p>Total: {price*quantity}$</p>
                </div>
            </div>
            <div className={styles.itemControls}>
                <div>
                   <button onClick={()=>{handleDecreaseQuantityInCart(id)}}>-</button>
                   <span>{quantity}</span>
                   <button onClick={()=>{handleIncreaseQuantityInCart(id)}}>+</button>
                </div>
                <img src={removeIcon} alt="remove-item" width={40} onClick={()=>{handleRemove(id)}}/>
            </div>
            
        </div>
       
    </>
  )
}
export {FeaturedItem,ShopItem,CartItem} 