function P1card({database}) {
    return (
        <div className="card border-0 shadow-sm col-3 text-start">

            <div className="position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
                <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    SALE
                </span>

                <img
                    // src={img}
                    src={database.image}
                    className="card-img-top"
                    alt="Product"
                    style={{ objectFit: "contain", height: "180px" }}
                />
            </div>

   
            <div className="card-body">


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


                <p className="fs-3">
                    {database.name}
                </p>

                <div className="mt-2">
                    <span className="text-secondary text-decoration-line-through me-2">
                        $360
                    </span>
                    <span className="fw-bold text-primary">
                        {database.price}
                        </span>
                </div>
                <p className="">
                    {database.description}
                </p>
            </div>
        </div>
    );
}

export default P1card;