import React from "react";
import { IconTruckDelivery, IconReceiptRefund, IconClock, IconPackage } from '@tabler/icons-react';

function ShippingAndRefund() {
  return (
    <main className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">Shipping & Refund Policy</h1>
            <p className="text-muted">
              <strong>Last Updated: January 15, 2026</strong>
            </p>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Thank you for shopping with Enduo Apparel. Below are the terms and conditions that constitute our Shipping and Refund Policy.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 mb-5">
              <div className="d-flex align-items-center mb-4">
                <IconTruckDelivery size={32} className="text-primary me-3" stroke={2} />
                <h2 className="h3 mb-0 fw-bold border-bottom pb-2 flex-grow-1">1. Shipping Policy</h2>
              </div>
              
              <div className="card border-0 bg-light p-4 mb-4">
                <h3 className="h5 fw-bold"><IconClock size={20} className="me-2" /> Processing Times</h3>
                <p className="mb-0">
                  All orders are processed within <strong>1–3 business days</strong>. Orders are not shipped or delivered on weekends or holidays.
                </p>
              </div>

              <h4 className="h5 fw-bold mb-3">Shipping Rates & Delivery Estimates</h4>
              <div className="table-responsive mb-4">
                <table className="table table-hover border">
                  <thead className="table-dark">
                    <tr>
                      <th>Shipping Method</th>
                      <th>Estimated Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Standard Shipping</td>
                      <td>5–7 business days</td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-primary">Express Shipping</td>
                      <td>2–3 business days</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">International Shipping</td>
                      <td>7–21 business days (depending on location)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h4 className="h6 fw-bold text-uppercase">Tracking</h4>
                  <p className="small text-muted">You will receive a Shipment Confirmation email with a tracking number once your order has shipped.</p>
                </div>
                <div className="col-md-6">
                  <h4 className="h6 fw-bold text-uppercase">Customs & Duties</h4>
                  <p className="small text-muted">Enduo Apparel is not responsible for any customs and taxes applied to your order.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center mb-4">
                <IconReceiptRefund size={32} className="text-primary me-3" stroke={2} />
                <h2 className="h3 mb-0 fw-bold border-bottom pb-2 flex-grow-1">2. Refund & Return Policy</h2>
              </div>

              <div className="alert alert-info d-flex align-items-center" role="alert">
                <IconPackage size={24} className="me-3" />
                <div>
                  <strong>Return Window:</strong> We offer a 7-day return policy. You have 7 days after receiving your item to request a return.
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6 mb-4">
                  <h3 className="h5 fw-bold">Eligibility Criteria</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item ps-0 bg-transparent">Unworn, unwashed, and unused</li>
                    <li className="list-group-item ps-0 bg-transparent">Tags still attached</li>
                    <li className="list-group-item ps-0 bg-transparent">Receipt or proof of purchase</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h3 className="h5 fw-bold">Non-Returnable Items</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item ps-0 bg-transparent text-danger">Final sale items & Gift cards</li>
                    <li className="list-group-item ps-0 bg-transparent text-danger">Custom-made apparel</li>
                    <li className="list-group-item ps-0 bg-transparent text-danger">Intimate wear</li>
                  </ul>
                </div>
              </div>

              <div className="card bg-white text-dark p-5 border-0 rounded-4 shadow">
                <h3 className="h5 fw-bold text-primary">Return Process</h3>
                <p>To start a return, please contact us at <a href="mailto:purpose@enduoapparel.com" className="text-primary">purpose@enduoapparel.com</a>.</p>
                <p className="small mb-0 text-danger">
                  If approved, you’ll be automatically refunded on your original payment method within 10 business days.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default ShippingAndRefund;
