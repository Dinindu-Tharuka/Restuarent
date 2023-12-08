import { createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Dining from "../pages/Dining/Dining";
import Takeaway from "../pages/Takeaway/Takeaway";
import { AnimatePresence } from 'framer-motion'
import OrderMainPage from "../pages/Order/OrderMainPage";
import Privateroutes from "./Privateroutes";
import Login from "../pages/Auth/Login";


const router = createBrowserRouter([
    { path:'/login', element: <Login/>},
    {
        element: <Privateroutes />,
        children: [
        { path: "/", element: <AnimatePresence><MainPage/></AnimatePresence>},            
        { path:'/dining', element:<AnimatePresence><Dining/></AnimatePresence>},
        { path:'/dining/order/:table', element:<AnimatePresence><OrderMainPage/></AnimatePresence>},
        { path:'/takeaway', element:<AnimatePresence><Takeaway/></AnimatePresence>},           
          
        ],
      },

])




export default router