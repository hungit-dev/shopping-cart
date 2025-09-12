import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
const routes=[
 {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
        {index: true,element:<Home/> },
        { path:"home",element:<Home/>},
        {path: "shop",element:<Shop/>},
        {path:"cart",element:<Cart/>}
    ]
 }
]
export default routes