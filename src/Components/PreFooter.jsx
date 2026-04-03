function PreFooter() {
  return (
    <>
      <div className="text-center align-items-center bg-primary my-4">
        <div className="container py-4 w-50">
          <h3 className="text-white">Subscribe to our newsletter</h3>
          <p className="text-white small">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="position-relative border-white py-4">
            <input
              type="text"
              placeholder="Email address"
              className="form-control pe-5 py-2"
              style={{ height: "50px" }}
            />


          <div className="">
            <button className="btn position-absolute top-50 end-0 translate-middle-y me-1 px-4 text-white btn-bord"
                style={{background:"#FA8232"}}
            >
              <span className="txtOrange">
                Subscribe

              </span>
            </button>
          </div>
          </div>
          {/* <div className="logos-slider overflow-hidden py-3">
            <div className="logos-track d-flex">
              <img src="" alt="logo" className="mx-4" />
              <img src="" className="mx-4" />
              <img src="" className="mx-4 w-50" />
              <img src="" className="mx-4" />
              <img src="" alt="logo" className="mx-4" />
              <img src="" className="mx-4"  />
              <img src="" className="mx-4 w-50" />
              <img src="" className="mx-4" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PreFooter;
