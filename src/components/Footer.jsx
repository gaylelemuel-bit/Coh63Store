import "./Footer.css";

function Footerbar() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container-fluid text-center text-md-start">
        <div className="row text-center text-md-start">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">G2G</h5>
            <p>
              Premium apparel designed for comfort and style. Elevate your everyday wardrobe with G2G.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Our Story</h6>
            <p><a href="/about" className="text-light text-decoration-none small">Our Story</a></p>
            <p><a href="/careers" className="text-light text-decoration-none small">Careers</a></p>
            <p><a href="/terms" className="text-light text-decoration-none small">Terms of Service</a></p>
            <p><a href="/privacy" className="text-light text-decoration-none small">Privacy Policy</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Customer Care</h6>
            <p><a href="/contact" className="text-light text-decoration-none small">Contact Us</a></p>
            <p><a href="/shipping" className="text-light text-decoration-none small">Shipping & Returns</a></p>
            <p><a href="/faq" className="text-light text-decoration-none small">FAQ</a></p>
            <p><a href="/size-guide" className="text-light text-decoration-none small">Size Guide</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Connect</h6>
            <p><i className="bi bi-telephone me-2"></i> <a href="tel:+1-555-321-0537" className="text-light text-decoration-none">(555) 321-0537</a></p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-light fs-5"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>

        <hr className="mb-4 mt-5" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small text-muted">
              &copy; 2025 G2G Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerbar;
