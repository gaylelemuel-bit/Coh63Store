import React from "react";
import { IconShieldCheck, IconCloudUpload, IconLock, IconEye, IconUsers, IconCookie, IconShieldLock, IconDatabase, IconAddressBook } from '@tabler/icons-react';

function PrivacyPolicy() {
  return (
    <main className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <IconShieldCheck size={48} className="text-primary mb-3" stroke={1.5} />
          <h1 className="display-4 fw-bold">Privacy Policy</h1>
          <p className="text-muted">Effective Date: January 15, 2026</p>
          <div className="mx-auto border-top pt-4" style={{ maxWidth: '800px' }}>
            <p className="lead text-secondary">
              At <strong>Enduo Apparel</strong>, we value your privacy. This policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
            </p>
          </div>
        </div>

        <div className="col-lg-10 col-xl-8">
          <section className="mb-5 shadow-sm border rounded-4 p-4 p-md-5 bg-white">
            <h2 className="h4 fw-bold mb-4 d-flex align-items-center">
              <IconCloudUpload className="me-2 text-primary" /> 1. Information We Collect
            </h2>
            <p className="text-secondary">When you visit Enduo Apparel, we collect information necessary to process your purchases and improve your experience.</p>
            
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold">Device Information</h6>
                  <p className="small text-muted mb-0">Web browser version, IP address, time zone, and site interaction (collected via cookies and log files).</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold">Order Information</h6>
                  <p className="small text-muted mb-0">Name, billing/shipping address, payment info (encrypted), email address, and phone number.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-4 d-flex align-items-center">
              <IconEye className="me-2 text-primary" /> 2. How We Use Your Information
            </h2>
            <div className="list-group list-group-flush border-start border-3 border-primary ms-2">
              <div className="list-group-item border-0">Fulfill orders (processing payments and shipping confirmations).</div>
              <div className="list-group-item border-0">Communicate regarding your orders or inquiries.</div>
              <div className="list-group-item border-0">Screen orders for potential risk or fraud.</div>
              <div className="list-group-item border-0">Provide advertising based on your opted-in preferences.</div>
            </div>
          </section>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 border-top border-primary border-4">
                <h3 className="h5 fw-bold mb-3 d-flex align-items-center">
                  <IconUsers size={20} className="me-2 text-primary" /> 3. Sharing Data
                </h3>
                <p className="small text-secondary">We share data with trusted partners to operate our store:</p>
                <ul className="small text-secondary ps-3">
                  <li><strong>Shopify:</strong> Powers our online store.</li>
                  <li><strong>Stripe/PayPal:</strong> Secure transaction handling.</li>
                  <li><strong>Marketing:</strong> Google & Meta Analytics.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 border-top border-primary border-4">
                <h3 className="h5 fw-bold mb-3 d-flex align-items-center">
                  <IconLock size={20} className="me-2 text-primary" /> 4. Your Rights
                </h3>
                <p className="small text-muted">Under GDPR & CCPA, you have the right to:</p>
                <ul className="small text-muted ps-3">
                  <li>Access or correct your data.</li>
                  <li>Request data deletion.</li>
                  <li>Opt-out of data "sales" (we do not sell your data).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-secondary ps-md-4">
            <h2 className="h5 fw-bold text-dark mt-4"><IconDatabase stroke={2} className="me-2 text-primary"  />5. Data Retention</h2>
            <p>We maintain Order Information for our records unless you request deletion.</p>
            <h2 className="h5 fw-bold text-dark mt-4"><IconCookie stroke={2} className="me-2 text-primary" />6. Cookies</h2>
            <p>We use cookies to enhance browsing and analyze traffic. You can disable these via your browser settings.</p>
            <h2 className="h5 fw-bold text-dark mt-4"><IconShieldLock stroke={2} className="me-2 text-primary"  />7. Security</h2>
            <p>We implement industry-standard measures (SSL/Encryption) to protect your data during transit.</p>
          </div>
          <div className="mt-5 p-4 bg-light rounded-4 border text-center">
            <h2 className="h5 fw-bold mb-3"><IconAddressBook stroke={2} className="me-2 text-primary"  />9. Contact Us</h2>
            <p className="mb-1 text-secondary">For questions or complaints regarding our privacy practices:</p>
            <p className="mb-0 fw-bold">
              <a href="mailto:purpose@enduoapparel.com" className="text-decoration-none">purpose@enduoapparel.com</a>
            </p>
            <p className="small text-muted mt-2">
              3106 Commerce St. Dallas, TX, 75226
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
