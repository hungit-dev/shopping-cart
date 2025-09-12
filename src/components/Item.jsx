import styles from "./Item.module.css";
import { useState } from "react";
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
const ShopItem=({img,title,price,id})=>{
  const [quantity,setQuantity]=useState(1)
  
 
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
          <img src={img} alt={title} width={80} height={110} data-id={id} />
          <h3>{title}</h3>
          <div>
          <p>{price}$</p>
          </div>
          <div className={styles.quantitySelector}>
            <button onClick={handleDecrement}>-</button>
           <input type="number" value={quantity} min={1}/>
           <button onClick={handleIncrement}>+</button>
           </div>
           <button>Add To Cart</button>
        </div>
        </>
    )
}

export {FeaturedItem,ShopItem} 