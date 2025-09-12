

import { useEffect,useState } from 'react';
import './App.css'
import {Link} from "react-router"
import { Outlet } from "react-router";
import fetchData from "./services/api.js"
function App() {
 const [isLoading,setIsLoading]=useState(true)
 const[itemDataList,setItemDataList] =useState([])
 // Automatically Fetch 10 items from the API, where each item is an object, and assign the array to itemDatalist when reloading page
 useEffect(
  ()=>{
    const fetchItems=async()=>{ 
      const data= await fetchData()
      setItemDataList(data)
      setIsLoading(false)
    }
    fetchItems()   
    
},[]
 )
console.log(itemDataList)

  return (
    <>
    {/* Header*/}
    <header>
     <nav className='nav-list'>
      <ul id='left-side-nav-list'>
        <li><Link to="home">MyShop</Link></li>
      </ul>
      <ul id='right-side-nav-list'>
        <li><Link to="home">Home</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="cart">Cart</Link></li>
      </ul>
     </nav>
    </header>
     
    {/* Main*/}
    <main>
       {/* Lifting state and sharing data with child components */}
     <Outlet context={{itemDataList,isLoading}}/>
    </main>
     
    {/* Footer*/}
    <footer>&copy; Made by Hung</footer>   
    </>
  )
}

export default App
