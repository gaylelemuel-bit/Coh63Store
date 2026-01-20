import "./Footer.css";

import { Link } from "react-router-dom";



import { IconTruckReturn, IconPhone, IconInfoHexagon, IconMail, IconRulerMeasure2, IconShieldLock, 
  IconClipboardText, IconBriefcase, IconHistory, IconMapPin, IconBrandInstagram, IconBrandFacebook,
  IconBrandPinterest,IconBrandYoutube,IconBrandTwitter } from '@tabler/icons-react';

function Footerbar() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 vw-100">
      <div className="container-fluid text-center text-md-start">
        <div className="row text-center text-md-start">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-primary">Enduo Apparel</h5>
            <p>
              Premium wear for the purpose-driven life.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Our Story</h6>
            <p><Link to="/about" className="text-light text-decoration-none small"><IconHistory stroke={2} /> Our Story</Link></p>
            <p><Link to="/careers" className="text-light text-decoration-none small"><IconBriefcase stroke={2} /> Careers</Link></p>
            <p><Link to="/terms" className="text-light text-decoration-none small"><IconClipboardText stroke={2} /> Terms of Service</Link></p>
            <p><Link to="/privacy" className="text-light text-decoration-none small"><IconShieldLock stroke={2} /> Privacy Policy</Link></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Customer Care</h6>
            <p><Link to="/contact" className="text-light text-decoration-none small"><IconMail stroke={2} /> Contact Us</Link></p>
            <p><Link  to="/shipping" className="text-light text-decoration-none small"><IconTruckReturn stroke={2} /> Shipping & Returns</Link></p>
            <p><Link to="/faq" className="text-light text-decoration-none small"><IconInfoHexagon stroke={2} /> FAQ</Link></p>
            <p><Link to="/size-guide" className="text-light text-decoration-none small"><IconRulerMeasure2 stroke={2} /> Size Guide</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Connect</h6>
            <p><i className="bi bi-telephone me-2"></i> <a href="tel:+1-555-321-0537" className="text-light text-decoration-none"><IconPhone stroke={2} /> (555) 321-0537</a></p>
            <p><IconMapPin stroke={2} /> 3106 Commerce St. Dallas, TX, 75226</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                <Link to="https://www.instagram.com" className="text-light fs-5">
      <IconBrandInstagram stroke={2} />
    </Link>
    <Link to="https://www.facebook.com" className="text-light fs-5">
      <IconBrandFacebook stroke={2} />
    </Link>
    <Link to="https://www.pinterest.com/pin/4996249583118377/" className="text-light fs-5">
      <IconBrandPinterest stroke={2} />
    </Link>
    <Link to="https://www.youtube.com" className="text-light fs-5">
      <IconBrandYoutube stroke={2} />
    </Link>
    <Link to="https://x.com" className="text-light fs-5">
      <IconBrandTwitter stroke={2} />
    </Link>
            </div>
          </div>
        </div>

        <hr className="mb-4 mt-5" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small text-muted">
              &copy; 2026 Enduo Apparel Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerbar;
