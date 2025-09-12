import styles from "./Shop.module.css";
import {ShopItem} from "./Item";
import { useOutletContext } from "react-router";
const Shop=()=>{
    const {itemDataList}=useOutletContext()
    const {isLoading}=useOutletContext()
    return (
        <>
        <div className={styles.shopWrapper}>
        <div className={styles.shop}>
             {/* Show loading if the data hasn't been fetched yet*/}
            {isLoading&&<div className={styles.loading}>Loading...</div>}
           {itemDataList.map((item)=>(
                <div key={item.id}>
                     <ShopItem  img={item.image} price={item.price} title={item.title} id={item.id}/>
                </div>
                 ))}
        </div>
        </div>
        
        </>
    )
}
export default Shop