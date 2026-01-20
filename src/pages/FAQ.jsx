import React from "react";
import { IconQuestionMark, IconCreditCard, IconTruck, IconRotate2, IconLeaf, IconMessage2 } from '@tabler/icons-react';

function FaqPage() {
  return (
    <main className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <div className="d-inline-block p-3 bg-primary-subtle rounded-circle mb-3">
              <IconQuestionMark size={40} className="text-primary" />
            </div>
            <h1 className="display-5 fw-bold">Frequently Asked Questions</h1>
            <p className="text-muted">Everything you need to know about Enduo Apparel.</p>
          </div>
          <div className="accordion accordion-flush shadow-sm border rounded" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#orderCollapse">
                  <IconCreditCard className="me-2 text-primary" stroke={2} /> Ordering & Payments
                </button>
              </h2>
              <div id="orderCollapse" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body border-top bg-light-subtle">
                  <div className="mb-4">
                    <h6 className="fw-bold">What payment methods do you accept?</h6>
                    <p className="text-dark">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and "Buy Now, Pay Later" options like Klarna and Afterpay.</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Can I change or cancel my order after it's placed?</h6>
                    <p className="text-dark">We process orders quickly. You have a 1-hour window after placing your order to request a change or cancellation by emailing <a href="mailto:purpose@enduoapparel.com">purpose@enduoapparel.com</a>. Once an order has reached "Processing," it cannot be modified.</p>
                  </div>
                  <div className="mb-0">
                    <h6 className="fw-bold">How do I know what size to buy?</h6>
                    <p className="text-dark">Every product page features a Size Guide link. If you are between sizes, we generally recommend sizing up for a more relaxed fit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#shippingCollapse">
                  <IconTruck className="me-2 text-primary" stroke={2} /> Shipping & Tracking
                </button>
              </h2>
              <div id="shippingCollapse" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body border-top bg-light-subtle">
                  <div className="mb-4">
                    <h6 className="fw-bold">Where do you ship?</h6>
                    <p className="text-dark">We currently ship across the United States and to select international locations. International rates are calculated at checkout.</p>
                  </div>
                  <div className="mb-0">
                    <h6 className="fw-bold">My tracking says "Delivered" but I haven't received it.</h6>
                    <p className="text-dark">Please check with neighbors or your building manager. If it hasn't appeared within 24 hours of the "Delivered" status, contact us immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#returnCollapse">
                  <IconRotate2 className="me-2 text-primary" stroke={2} /> Returns & Exchanges
                </button>
              </h2>
              <div id="returnCollapse" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body border-top bg-light-subtle">
                  <p className="text-dark">We offer a 7-day return window. Items must be unworn, unwashed, and have the original tags attached. <strong>Free returns are offered on all domestic orders!</strong></p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#qualityCollapse">
                  <IconLeaf className="me-2 text-primary" stroke={2} /> Product Care & Quality
                </button>
              </h2>
              <div id="qualityCollapse" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body border-top bg-light-subtle">
                  <h6 className="fw-bold">How should I wash my Enduo Apparel?</h6>
                  <p className="text-dark">Wash in cold water with like colors and hang to dry. Specific care instructions are located on the inner tag of every garment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 text-center">
            <div className="card bg-white text-dark p-5 border-0 rounded-4 shadow">
              <IconMessage2 size={40} className="text-primary mb-3 mx-auto" />
              <h2 className="h3 fw-bold">Still have questions?</h2>
              <p className="text-dark mb-4">We’re here to help you live a purpose-driven life.</p>
              <div className="row justify-content-center text-start">
                <div className="col-md-5 col-lg-4 border-end border-secondary border-opacity-25">
                  <p className="mb-1 fw-bold">Email Us</p>
                  <p className="small text-primary">purpose@enduoapparel.com</p>
                </div>
                <div className="col-md-5 col-lg-4 ps-md-4">
                  <p className="mb-1 fw-bold">Business Hours</p>
                  <p className="small text-dark mb-0">Mon – Fri: 9 AM – 5 PM CT</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default FaqPage;
