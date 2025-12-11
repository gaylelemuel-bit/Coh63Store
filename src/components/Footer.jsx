import "./Footer.css";


function Footerbar(){
    return(
    <nav className="foorBar">
        <div className="foot-container">
            <div className="foot-brand">
                <h2>G2G</h2>
            </div>
            <div class="footer-section links-company">
            <h4>About Us</h4>
            <ul>
                <li><a href="/about">Our Story</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
         </div>
            <div class="footer-section links-customer-service">
            <h4>Customer Care</h4>
            <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/shipping">Shipping & Returns</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/size-guide">Size Guide</a></li>
            </ul>
         </div>
         <div className="footer-section social-media">
            <h4>Connect</h4>
            <a href="#" className="foot-link">Instagram </a>
            <a href="#" className="foot-link">Facebook </a>
            <a href="#" className="foot-link">Pinterest </a>
         </div>   
            <div className="footer-bottom-bar">
                <p>Phone: <a href="tel:+1-555-321-0537">(555) 321-0537</a></p>
                <p>&copy; 2025 G2G Inc. All rights reserved.</p>
                
            </div>
        </div>
    </nav>
    )
}

export default Footerbar;