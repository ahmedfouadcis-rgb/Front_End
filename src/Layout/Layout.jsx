import { Outlet } from "react-router-dom"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"


function Layout (){
    return (
        <>
        <Header/>
          <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout