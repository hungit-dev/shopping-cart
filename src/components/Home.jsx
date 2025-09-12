import styles from "./Home.module.css";
import { Link } from "react-router";
import {FeaturedItem} from "./Item";
import { useOutletContext } from "react-router";
const Home=()=>{
    const {itemDataList}=useOutletContext();
    const {isLoading}=useOutletContext();
   
    return (
        <>
        <div className={styles.displayContent}>

            {/* Hero section*/}
            <div className={styles.hero}>
                <h1>Welcome to Our Store 🛍️</h1>
                <p>Discover amazing products at unbeatable prices.</p>
                <Link to="../shop">
                <button>Shop Now</button>
                </Link>
            </div>

            {/* Featured products section*/}
            <div className={styles.featuredProducts}>
                <div className={styles.titleWrapper}>
                <h2>Featured Products</h2>
                </div>
                 {/* Show loading if the data hasn't been fetched yet*/}
                {isLoading && <div>Loading...</div>}
                <div className={styles.itemWrapper}> 
                 {itemDataList.slice(0,3).map((item)=>(
                    <FeaturedItem key={item.id} img={item.image} price={item.price} title={item.title}/>
                 ))}
                 </div>
            </div>

            {/* why choose us section*/}
            <div className={styles.whyChooseUs}>
                <h2>Why Choose Us</h2>
                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <h3>🚚 Fast Delivery</h3>
                        <p>Get your products quickly and safely with our trusted delivery service.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <h3>💳 Secure Payment</h3>
                        <p>All transactions are protected with the latest security technology.</p>

                    </div>
                    <div className={styles.featureItem}>
                        <h3>⭐ Quality Products</h3>
                        <p>We only sell the best items, carefully selected for you.</p>
                    </div>
                </div>
            </div>

           {/* Start shopping section*/}
            <div className={styles.ctaSection}>
                <h2>Ready to start shopping?</h2>
                <Link to="../shop">
                    <button>Browse Products</button>
                </Link>  
            </div>
        </div>
        </>
    )
}
export default Home