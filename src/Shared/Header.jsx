import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-primary text-white py-2 border-bottom border-white">
        <div className="container d-flex justify-content-between align-items-center">

          <p className="mb-0 small ">
            Welcome to Clicon online eCommerce store.
          </p>

          <div className="d-flex align-items-center gap-2">
            <p className="mb-0 small">Follow us:</p>
            <Link to="https://www.youtube.com/">
              <i className="bi bi-youtube text-light"></i>
            </Link>
            <Link to="https://www.facebook.com/">
              <i className="bi bi-facebook text-light"></i>
            </Link>
            <Link to="https://www.facebook.com/">
              <i className="bi bi-pinterest text-light"></i>
            </Link>

            <div className="dropdown border-start">
              <button className="btn btn-sm text-white dropdown-toggle" data-bs-toggle="dropdown">
                Eng
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">English</a></li>
                <li><a className="dropdown-item">Arabic</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-sm text-white dropdown-toggle" data-bs-toggle="dropdown">
                USD
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Dollar</a></li>
                <li><a className="dropdown-item">Euro</a></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>

      <nav className="bg-primary py-3">
        <div className="container d-flex justify-content-between align-items-center">

          <Link to="/" className="text-decoration-none">
            <div className="d-flex align-items-center gap-2 text-white ">
              <div className=" d-flex justify-content-center align-items-center">
                <span className="text-white">
                  { }
                </span>
              </div>
              <h4 className="mb-0 fw-bold">CLICON</h4>
            </div>
          </Link>
          <div className="w-50 position-relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="form-control py-2 text-body-tertiary"
            />
            { }
          </div>

          <div className="d-flex gap-4 text-white fs-5">

            {/* <div className="position-relative">
        <Link to="err">
{}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-primary bg-white"> 
            2   
        <span className="visually-hidden">unread messages</span></span>
        </Link>
      </div> */}
            <Link to="" >
              { }
            </Link>
            <Link to="Login" >
              { }
            </Link>

          </div>

        </div>
      </nav>


      <nav className="bg-white py-2 border-bottom border-body-tertiary ">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="d-flex gap-3 text-body-tertiary align-items-center">

            <button className="btn btn-light border rounded-0 text-black bg-body-tertiary ">
              All Category

            </button>

            <span className="tex-orang">

              Track Order
            </span>
            <span className="tex-orang">

              Compare
            </span>
            <span className="tex-orang">

              Customer Support
            </span>
            <span className="tex-orang">

              Need Help
            </span>
          </div>

          <div>
            <span>
              { }
            </span>
          </div>

        </div>
      </nav>
    </>
  );
}
export default Header;
