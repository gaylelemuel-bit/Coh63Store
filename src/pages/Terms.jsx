function TermsOfService() {
  return (
    <main className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          
          <div className="border-bottom mb-5 pb-3">
            <h1 className="display-4 fw-bold text-primary">Terms of Service</h1>
            <p className="text-muted italic">Last Updated: January 15, 2026</p>
          </div>
          <div className="lead mb-5 p-4  ">
            Welcome to <strong>Enduo Apparel</strong>. These Terms of Service ("Terms") govern your use of our website and the purchase of our products. By accessing our site or purchasing from us, you agree to be bound by these Terms.
          </div> 
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">1. Overview</h2>
            <p className="text-secondary">
              This website is operated by Enduo Apparel. Throughout the site, the terms “we”, “us” and “our” refer to Enduo Apparel. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">2. Online Store Terms</h2>
            <p className="text-secondary">
              By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">3. Products and Pricing</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent border-0 ps-0">
                <span className="fw-bold">Accuracy:</span> We strive to display the colors and images of our clothing as accurately as possible. However, we cannot guarantee that your computer monitor's display of any color will be accurate.
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0">
                <span className="fw-bold">Modifications:</span> Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product at any time.
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0">
                <span className="fw-bold">Availability:</span> Certain products may be available exclusively online through the website and may have limited quantities.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">4. Shipping and Delivery</h2>
            <p className="text-secondary">
              Shipping times and costs are calculated at checkout. Enduo Apparel is not responsible for delays caused by the courier or customs clearance for international orders. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">5. Returns and Refunds</h2>
            <p className="text-secondary">
              Our return policy allows for returns within 7 days of purchase. Items must be unworn, unwashed, and in their original packaging with tags attached. Please visit our <a href="/returns" className="text-primary text-decoration-none fw-semibold">Returns Center</a> to start a request.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">6. Accuracy of Billing and Account Information</h2>
            <p className="text-secondary">
              You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers/expiration dates.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3 text-uppercase">7. Intellectual Property</h2>
            <p className="text-secondary">
              All content included on this site, such as text, graphics, logos, images, and software, is the property of Enduo Apparel and protected by international copyright laws.
            </p>
          </section>

          <section className="mb-5 border-top pt-4">
            <h2 className="h4 fw-bold mb-3 text-uppercase">11. Contact Information</h2>
            <div className= "card bg-white text-dark p-5 border-0 rounded-4 shadow">
              <p className="mb-1 text-dark">Questions about the Terms of Service should be sent to us at:</p>
              <p className="mb-1 text-dark"><strong>Email:</strong> <a href="mailto:purpose@enduoapparel.com" className="text-primary">purpose@enduoapparel.com</a></p>
              <p className="mb-0 text-dark"><strong>Address:</strong> 3106 Commerce St. Dallas, TX, 75226</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default TermsOfService;
