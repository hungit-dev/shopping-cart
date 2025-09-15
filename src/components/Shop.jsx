import styles from "../styles/Shop.module.css";
import { ShopItem } from "./Item";
import { useOutletContext } from "react-router-dom";
const Shop = () => {
  const { itemDataList } = useOutletContext();
  const { isLoading } = useOutletContext();
  const { handleAddToCart } = useOutletContext();
  return (
    <>
      <div className={styles.shopWrapper}>
        <h1>Shop</h1>
        <div className={styles.shop}>
          {/* Show loading if the data hasn't been fetched yet*/}
          {isLoading && <div className={styles.loading}>Loading...</div>}
          {itemDataList.map((item) => (
            <div key={item.id}>
              <ShopItem
                img={item.image}
                price={item.price}
                title={item.title}
                handleAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Shop;
