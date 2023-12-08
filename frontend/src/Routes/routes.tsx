import { createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Dining from "../pages/Dining/Dining";
import Takeaway from "../pages/Takeaway/Takeaway";
import { AnimatePresence } from 'framer-motion'
import OrderMainPage from "../pages/Order/OrderMainPage";


const router = createBrowserRouter([
    { path:'/', element:<AnimatePresence><MainPage/></AnimatePresence>},
    { path:'/dining', element:<AnimatePresence><Dining/></AnimatePresence>},
    { path:'/takeaway', element:<AnimatePresence><Takeaway/></AnimatePresence>},
    { path:'/order/:table', element:<AnimatePresence><OrderMainPage/></AnimatePresence>},

])




export default router