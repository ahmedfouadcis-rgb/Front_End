import './App.css';
import { RouterProvider } from "react-router-dom";
import  CustomRouter from './Router/Router'
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {

  return (
    <>
        <RouterProvider router={CustomRouter}/>
    </>
  )
}

export default App
