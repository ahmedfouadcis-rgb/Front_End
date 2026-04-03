import image from '../assets/mac.png'
import payment from '../assets/payment-method.png'
import CarModal from './CarModal'
import './Modal.css'
function Modal() {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-xl-6">
                  <div className='slider'>
                    <div className='border rounded p-3'>
                      <img className="img-fluid" src={image} />
                    </div>
                    <div className='carousel'>
                      <CarModal/>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 text-start" name="slidercontent">
                  <div className=''>
                    <div className=''>
                      <i className="bi bi-star-fill text-warning h6"></i>
                      <i className="bi bi-star-fill text-warning h6"></i>
                      <i className="bi bi-star-fill text-warning h6"></i>
                      <i className="bi bi-star-fill text-warning h6"></i>
                      <i className="bi bi-star-half text-warning h6"></i>
                      <b className="mx-2">4.7 Star Rating</b>
                      <small className="text-secondary"> (21,671 User feedback)</small>
                    </div>
                  </div>
                  <div className=''>
                    <h3 className='h6'>2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray</h3>
                  </div>
                  <div className=''>
                    <div className="container">
                      <div className="row row-cols-2 mb-3">
                        <div className="col p-0 text-secondary">Sku: <span className='text-dark fw-bold'>A264671</span></div>
                        <div className="col p-0 text-secondary">Availability: <span className='text-success fw-bold'>In Stock</span></div>
                        <div className="col p-0 text-secondary">Brand: <span className='text-dark fw-bold'>Apple</span></div>
                        <div className="col p-0 text-secondary">Category: <span className='text-dark fw-bold'>Electronics Devices</span></div>
                      </div>
                    </div>
                  </div>
                  <div className='h5 d-flex align-items-center'>
                    <span className="fw-bold text-primary h5 my-0">$250</span>
                    <span className="text-secondary text-decoration-line-through mx-2 h5 my-0">$360</span>
                    <span className="badge bg-warning text-dark"> 21% OFF </span>
                  </div>
                  <hr className='my-3'/>
                  <div className='' name='form'>
                    <div className="container">
                      <div className="row row-cols-2">
                        <div className="col g-*">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label m-0">Color</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>
                        </div>
                        <div className="col g-*">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label m-0">Size</label>
                            <select className="form-select" aria-label="Default select example">
                              <option defaultValue="selected">14-inch Liquid Retina XDR display</option>
                              <option value="1">15-inch Liquid Retina XDR display</option>
                              <option value="2">16-inch Liquid Retina XDR display</option>
                              <option value="3">17-inch Liquid Retina XDR display</option>
                            </select>
                          </div>
                        </div>
                        <div className="col g-*">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label m-0">Memory</label>
                            <select className="form-select" aria-label="Default select example">
                              <option defaultValue="selected">16GB unified memory</option>
                              <option value="1">32GB unified memory</option>
                              <option value="2">64GB unified memory</option>
                              <option value="3">128GB unified memory</option>
                            </select>
                          </div></div>
                        <div className="col g-*">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label m-0">Storage</label>
                            <select className="form-select" aria-label="Default select example">
                              <option defaultValue="selected">1TV SSD Storage</option>
                              <option value="1">2TV SSD Storage</option>
                              <option value="2">1TV HDD Storage</option>
                              <option value="3">2TV HDD Storage</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex' name='buttongp'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-primary">+</button>
                      <input type="button" className="btn btn-outline-primary" defaultValue="1" />
                      <button type="button" className="btn btn-outline-primary">-</button>
                    </div>
                    <button type="button" className="btn btn-primary mx-2 px-5">Add To Cart <i className="bi bi-cart"></i></button>
                    <button type="button" className="btn btn-outline-primary">BUY NOW</button>
                  </div>
                  <div className='d-flex justify-content-between my-3' name='icons'>
                    <div className='d-inline-flex'>
                      <span className='d-inline-flex me-2'><i className="bi bi-suit-heart me-1 fs-5"></i> Add to Wishlist</span>
                      <span className='d-inline-flex me-2'><i className="bi bi-arrow-repeat me-1 fs-5"></i>Add to Compare</span>
                    </div>
                    <div>
                      <span className=''>Share product:
                        <i className="bi bi-square mx-1"></i>
                        <i className="bi bi-facebook mx-1"></i>
                        <i className="bi bi-twitter mx-1"></i>
                        <i className="bi bi-pinterest mx-1"></i>
                      </span>
                    </div>
                  </div>
                  <div className='border rounded p-2'>
                    <p>100% Guarantee Safe Checkout</p>
                    <img className="img-fluid" src={payment} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal