
function P2card({database}) {
  return (
    <div className="card border-0 shadow-sm col-3">
       <div className="position-relative p-3" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
        <span className="badge bg-success position-absolute top-0 start-0 m-2">
          SALE
        </span>

        <img
          src={database?.image}   
          className="card-img-top"
          alt="Product"
        />
      </div>
      <div className="card-body text-start">
        <div className="mb-2">
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
            <small className="text-secondary">(4.5)</small>
          <small className="text-secondary"> (583)</small>
          </div>
        </div>
        <h6 className="card-title fs-3">
          {database?.name}
        </h6>
        <div className="mt-2">
          <del className="text-secondary me-2">
            $360
          </del>
          <span className="fw-bold text-primary">$250</span>
        </div>
        <p>
          {database?.description}  
        </p>
        <div className="p-1 d-flex justify-content-between">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-heart"></i>
          </button>
          <button className="btn btn-primary btn-sm px-4">
            <i className="bi bi-cart"></i> Add to Cart
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default P2card;