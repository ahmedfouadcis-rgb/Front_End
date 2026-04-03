
function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row gy-4 py-4">

          <div className="col-3">
            <div className="d-flex align-items-center mb-3">
              <div
                className=" d-flex justify-content-center align-items-center me-2">
                  {}
              </div>
              <h5 className="mb-0 fw-bold">CLICON</h5>
            </div>

            <p className="text-secondary small">Customer Supports:</p>
            <p className="fw-semibold text-white">(629) 555-0129</p>

            <p className="small text-secondary">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            <p className="small text-white">info@kinbo.com</p>
          </div>

          <div className="col-2">
            <h6 className="fw-semibold mb-3">TOP CATEGORY</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="tex-white">Computer & Laptop</li>
              <li className="tex-white">SmartPhone</li>
              <li className="tex-white"> Accessories</li>
              <li className="tex-white">Camera & Photo</li>
              <li className="tex-white">TV & Homes</li>
            </ul>
            <p className="text-warning small mt-2 tex-scal">Browse All Product 
              <span>
              {}
              </span>
            </p>
          </div>

          <div className="col-2">
            <h6 className="fw-semibold mb-3">QUICK LINKS</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="tex-white">Shop Product</li>
              <li className="tex-white">Shopping Cart</li>
              <li className="tex-white">Wishlist</li>
              <li className="tex-white">Compare</li>
              <li className="tex-white">Track Order</li>
              <li className="tex-white">Customer Help</li>
              <li className="tex-white">About Us</li>
            </ul>
          </div>

          <div className="col-2">
            <h6 className="fw-semibold mb-3 ">DOWNLOAD APP</h6>

            <div className="bg-secondary p-2 rounded mb-2 text-center d-flex align-items-center bg-orang">
              {}
              <div className="">
              <small>Get it now</small>
              <p className="mb-0 fw-bold">Google Play</p>
              </div>
            </div>

            <div className="bg-secondary p-2 rounded text-center  d-flex align-items-center bg-orang">
              {}
              <div className="">
              <small>Get it now</small>
              <p className="mb-0 fw-bold">App Store</p>
              </div>

            </div>
          </div>

          <div className="col-3 ">
            <h6 className="fw-semibold mb-3">POPULAR TAG</h6>

            <div className="d-flex flex-wrap gap-2 mb-2">
              {[
                "Game", "iPhone", "TV", "Asus Laptops",
                "Macbook", "SSD", "Graphics Card",
                "Power Bank", "Smart TV", "Speaker",
                "Tablet", "Microwave", "Samsung"
              ].map((tag, index) => (
                <span
                  key={index}
                  className="border px-1 py-1 small"
                  style={{ borderColor: "#969696" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
        <div className="text-center pt-3 text-secondary border-top border-body-tertiary">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </div>
      </div>
    </footer>

    </>
  )}

export default Footer