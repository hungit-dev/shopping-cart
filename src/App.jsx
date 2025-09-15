import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import fetchData from "./services/api.js";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemDataList, setItemDataList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  //if user click addToCart button, it will add that item and its properties to cartItems, and then send it to "Cart Page", which displays user's cart
  const handleAddToCart = (title, src, quantity, price) => {
    setCartItems([
      ...cartItems,
      {
        title: title,
        src: src,
        id: crypto.randomUUID(), //generate unique id for each order in cart
        quantity: quantity,
        price: price,
      },
    ]);
  };
  //remove selected item from the cartItems list
  const handleRemoveItemFromCart = (idToRemove) => {
    const newCartItems = cartItems.filter((item) => item.id !== idToRemove);
    setCartItems(newCartItems);
  };
  //increase quantity for selected item in cartItems
  const handleIncreaseQuantityInCart = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 } // // increase quantity of matching item
          : item
      )
    );
  };

  //decrease quantity for  selected item in cartItems
  const handleDecreaseQuantityInCart = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 } // // decrease quantity of matching item
            : item
        )
        .filter((item) => item.quantity > 0) //delete item if quantity=0
    );
  };

  // Automatically Fetch items from the API, where each item is an object, and assign the array to itemDatalist when reloading page, itemDataList is a list of data which we will use for all of our pages
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData();
      setItemDataList(data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <>
      {/* Header*/}
      <header>
        <nav className="nav-list">
          <ul id="left-side-nav-list">
            <li>
              <Link to="home">MyShop</Link>
            </li>
          </ul>
          <ul id="right-side-nav-list">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="cart">
                Cart {cartItems.length > 0 && <div>{cartItems.length}</div>}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main*/}
      <main>
        {/* Lifting states and sharing data with child components */}
        <Outlet
          context={{
            itemDataList,
            isLoading,
            cartItems,
            handleAddToCart,
            handleRemoveItemFromCart,
            handleIncreaseQuantityInCart,
            handleDecreaseQuantityInCart,
          }}
        />
      </main>

      {/* Footer*/}
      <footer>&copy; Made by Hung</footer>
    </>
  );
}

export default App;
