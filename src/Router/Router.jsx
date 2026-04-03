import { createBrowserRouter } from "react-router-dom";
import  Layout  from "../Layout/Layout";
import  Home  from "../Pages/Home";
const CustomRouter = createBrowserRouter([
    {
        path:"",
        element: <Layout />,
        children: [
            { element: <Home/>, index: true },
           
        ]
    }
])
export default CustomRouter