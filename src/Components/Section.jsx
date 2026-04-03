import axios from "axios"
import { useEffect, useState } from "react"
import P1card from './P1card'
import P2card from './P2card'
// import './App.css'
// import Home from './Home'
import Modal from './Modal'
import CarModal from './CarModal'
function Section() {
  const [database, setProducts] = useState([
    {
      name: "" 
    }  // =====================> or use question mark ==> database?.image 
  ]);

  async function getProducts() {
    const res = await axios.get("http://localhost:3000/products/");
    await setProducts(res.data.products);

  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex">

          <P2card database={database[0]} />

          <div className="d-flex flex-wrap">
            {
              database.slice(1).map((item, idx) => {
                // console.log(item)
                return <P1card key={idx} database={item} />
              })
            }
          </div>
        </div>
        <Modal />
        <CarModal />
      </div>
    </>
  )
}

export default Section
