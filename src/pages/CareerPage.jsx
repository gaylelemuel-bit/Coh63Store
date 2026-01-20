import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import {
  IconPlant2, IconInfinity, IconBolt,
  IconConfetti, IconClock, IconUsers, IconFileUpload,
  IconPhoneCall, IconSearch, IconUsersGroup, IconTrophy,
  IconMailForward, IconStairsUp, IconMapPin, IconCurrencyDollar,
  IconDog, IconShirt
} from '@tabler/icons-react';

function ApplyNowModal({ show, handleClose, jobTitle }) {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="rounded-0 border-0">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-black text-uppercase">Apply for {jobTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 p-md-5">
        <Form onSubmit={(e) => {
          e.preventDefault();
          alert(`Application for ${jobTitle} sent!`);
          handleClose();
        }}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-uppercase">Full Name</Form.Label>
            <Form.Control type="text" className="rounded-0 border-dark" placeholder="Enter your full name" required />
          </Form.Group>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold text-uppercase">Email Address</Form.Label>
                <Form.Control type="email" className="rounded-0 border-dark" placeholder="name@example.com" required />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold text-uppercase">Phone Number</Form.Label>
                <Form.Control type="tel" className="rounded-0 border-dark" placeholder="+1 (555) 000-0000" required />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-uppercase">LinkedIn Profile</Form.Label>
            <Form.Control type="url" className="rounded-0 border-dark" placeholder="https://linkedin.com" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-uppercase">Portfolio / Website</Form.Label>
            <div className="input-group">
              <span className="input-group-text bg-dark text-white rounded-0">
                <IconFileUpload size={18} />
              </span>
              <Form.Control type="url" className="rounded-0 border-dark" placeholder="https://yourportfolio.com" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold text-uppercase">Resume / CV (PDF)</Form.Label>
            <Form.Control type="file" className="rounded-0 border-dark" accept=".pdf" required />
            <Form.Text className="text-muted">Maximum file size: 5MB</Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="small fw-bold text-uppercase">Earliest Start Date / Notice Period</Form.Label>
            <Form.Select className="rounded-0 border-dark">
              <option>Immediately</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
              <option>Negotiable</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="small fw-bold text-uppercase">Why do you want to join Enduo?</Form.Label>
            <Form.Control as="textarea" rows={4} className="rounded-0 border-dark" placeholder="Tell us a bit about your passion for sustainable fashion..." />
          </Form.Group>
          <Button variant="secondary" type="button" className="w-100 rounded-0 py-3 fw-bold text-uppercase mb-2" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" type="submit" className="w-100 rounded-0 py-3 fw-bold text-uppercase">Submit Application</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function CareerPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleOpenModal = (title) => {
    setSelectedJob(title);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bg-white min-vh-100 text-dark">
      <section className="vh-100 d-flex align-items-center position-relative overflow-hidden bg-dark text-white">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-1 fw-black text-uppercase mb-3" style={{ letterSpacing: '-4px' }}>
                Enduo <span className="text-primary fw-light">2026</span>
              </h1>
              <h2 className="display-5 fw-bold mb-4">Style the Future With Us.</h2>
              <p className="lead fs-4 opacity-75 mb-5 pe-lg-5">
                We aren’t just selling clothes; we’re building a community centered around sustainable fashion and street culture. Join the collective.
              </p>
              <div className="d-flex gap-3">
                <a href="#openings" className="btn btn-primary btn-lg px-5 rounded-0 fw-bold py-3 text-uppercase">View Openings</a>
                <a href="#benefits" className="btn btn-outline-light btn-lg px-5 rounded-0 fw-bold py-3 text-uppercase">Our Perks</a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute end-0 bottom-0 opacity-25 d-none d-lg-block" style={{ fontSize: '15rem', fontWeight: '900', lineHeight: '0.8', pointerEvents: 'none' }}>
          CAREERS
        </div>
      </section>
      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-6 col-md-3 border-end border-white border-opacity-25">
                <IconBolt className="mb-2" />
                <h6 className="fw-bold text-uppercase small m-0">Quality First</h6>
              </div>
              <div className="col-6 col-md-3 border-md-end border-white border-opacity-25">
                <IconPlant2 className="mb-2" />
                <h6 className="fw-bold text-uppercase small m-0">Sustainability</h6>
              </div>
              <div className="col-6 col-md-3 border-end border-white border-opacity-25">
                <IconUsers className="mb-2" />
                <h6 className="fw-bold text-uppercase small m-0">Inclusion</h6>
              </div>
              <div className="col-6 col-md-3">
                <IconInfinity className="mb-2" />
                <h6 className="fw-bold text-uppercase small m-0">Agility</h6>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="container my-6 py-5">
          <div className="row mb-5 align-items-end">
            <div className="col-md-6">
              <h2 className="display-4 fw-bold">Total Rewards</h2>
            </div>
            <div className="col-md-6 text-md-end text-muted lead">
              Redesigning well-being for 2026.
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-5 border-start border-4 border-primary bg-light h-100">
                <IconClock className="text-primary mb-4" size={48} stroke={1.5} />
                <h3 className="fw-bold">Time to Recharge</h3>
                <ul className="list-unstyled vstack gap-3 mt-4">
                  <li><strong>Unlimited PTO</strong> — with a 2-week mandatory "Rest & Reset" policy.</li>
                  <li><strong>Mental Health Days</strong> — dedicated paid time off to recharge.</li>
                  <li><strong>Your Birthday</strong> — a fully paid holiday just for you.</li>
                  <li><strong>16-Week Parental Leave</strong> — fully paid for all new parents.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5 border-start border-4 border-dark bg-light h-100">
                <IconStairsUp className="text-dark mb-4" size={48} stroke={1.5} />
                <h3 className="fw-bold">Growth & Security</h3>
                <ul className="list-unstyled vstack gap-3 mt-4">
                  <li><strong>$2,500 Annual Stipend</strong> — for courses and certifications.</li>
                  <li><strong>401(k) Matching</strong> — up to 5% to help you plan for the future.</li>
                  <li><strong>Mentorship</strong> — direct access to founders and industry leaders.</li>
                  <li><strong>Visa Sponsorship</strong> — supporting our global talent collective.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="openings" className="bg-light py-6">
          <div className="container">
            <h2 className="display-6 fw-bold mb-5">Open Roles</h2>
            <div className="vstack gap-4">
              <div className="bg-white p-4 shadow-sm border-start border-primary border-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <IconMapPin size={16} className="text-primary" />
                    <span className="text-primary fw-bold small text-uppercase">Remote / Hybrid - City, State</span>
                  </div>
                  <h4 className="fw-bold mb-2">Social Media & Content Specialist</h4>
                  <div className="d-flex align-items-center gap-3 text-muted small">
                    <span><IconCurrencyDollar size={16} /> $65,000 – $85,000 per year + Annual Bonus</span>
                  </div>
                  <p className="small mt-2 mb-0">Manage our 2026 social strategy, coordinate influencer partnerships, and produce high-engagement short-form video content.</p>
                </div>
                <button onClick={() => handleOpenModal("Social Media & Content Specialist")}
                  className="btn btn-dark btn-lg px-5 mt-3 mt-md-0 rounded-0 text-uppercase small fw-bold">Apply Now</button>
              </div>
              <div className="bg-white p-4 shadow-sm border-start border-primary border-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <IconMapPin size={16} className="text-primary" />
                    <span className="text-primary fw-bold small text-uppercase">Remote / City, State</span>
                  </div>
                  <h4 className="fw-bold mb-2">Customer Experience Lead</h4>
                  <div className="d-flex align-items-center gap-3 text-muted small">
                    <span><IconCurrencyDollar size={16} /> $75,000 – $100,000 per year + Equity Options</span>
                  </div>
                  <p className="small mt-2 mb-0">Ensure our customers have a seamless shopping experience. You’ll manage our support team and optimize the post-purchase journey.</p>
                </div>
                <button onClick={() => handleOpenModal("Customer Experience Lead")}
                  className="btn btn-dark btn-lg px-5 mt-3 mt-md-0 rounded-0 text-uppercase small fw-bold" >Apply Now</button>
              </div>
              <div className="bg-white p-4 shadow-sm border-start border-primary border-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <IconMapPin size={16} className="text-primary" />
                    <span className="text-primary fw-bold small text-uppercase">On-site (Design Studio)</span>
                  </div>
                  <h4 className="fw-bold mb-2">Junior Fashion Designer</h4>
                  <div className="d-flex align-items-center gap-3 text-muted small">
                    <span><IconCurrencyDollar size={16} /> $60,000 – $78,000 per year</span>
                  </div>
                  <p className="small mt-2 mb-0">Assist in the development of our seasonal collections, from initial mood boards to tech packs.</p>
                </div>
                <button onClick={() => handleOpenModal("Junior Fashion Designer")}
                  className="btn btn-dark btn-lg px-5 mt-3 mt-md-0 rounded-0 text-uppercase small fw-bold">Apply Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-6">
          <h2 className="text-center fw-bold mb-5 display-6 text-uppercase" style={{ letterSpacing: '2px' }}>Our Hiring Process</h2>
          <div className="row text-center pt-4 g-0">
            <div className="col-md mb-5">
              <IconFileUpload className="text-primary mb-3" size={40} />
              <h5 className="fw-bold small text-uppercase">1. Apply</h5>
              <p className="text-muted extra-small px-3">Submit your resume and portfolio.</p>
            </div>
            <div className="col-md mb-5">
              <IconPhoneCall className="text-primary mb-3" size={40} />
              <h5 className="fw-bold small text-uppercase">2. Intro Call</h5>
              <p className="text-muted extra-small px-3">A 20-minute chat with our hiring manager.</p>
            </div>
            <div className="col-md mb-5">
              <IconSearch className="text-primary mb-3" size={40} />
              <h5 className="fw-bold small text-uppercase">3. Deep Dive</h5>
              <p className="text-muted extra-small px-3">A technical interview or creative challenge.</p>
            </div>
            <div className="col-md mb-5">
              <IconUsersGroup className="text-primary mb-3" size={40} />
              <h5 className="fw-bold small text-uppercase">4. Meet Team</h5>
              <p className="text-muted extra-small px-3">A final round with leads.</p>
            </div>
            <div className="col-md mb-5">
              <IconTrophy className="text-primary mb-3" size={40} />
              <h5 className="fw-bold small text-uppercase text-primary">5. The Offer</h5>
              <p className="text-muted extra-small px-3">Join the Enduo family!</p>
            </div>
          </div>
        </section>
        <section className="container py-6 border-top">
          <div className="row g-5 align-items-center text-center text-lg-start">
            <div className="col-lg-4">
              <h2 className="fw-bold mb-3 display-5">The "Enduo Extra"</h2>
              <p className="text-muted">The lifestyle details that make the difference.</p>
            </div>
            <div className="col-lg-8">
              <div className="row g-4 text-start">
                <div className="col-md-6 d-flex gap-3 card border-0 bg-transparent">
                  <IconShirt className="text-primary flex-shrink-0" />
                  <div>
                    <h6 className="fw-bold mb-1">Employee Discount</h6>
                    <p className="small text-muted mb-0">50% off all Enduo Apparel collections.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex gap-3">
                  <IconConfetti className="text-primary flex-shrink-0" />
                  <div>
                    <h6 className="fw-bold mb-1">Style Allowance</h6>
                    <p className="small text-muted mb-0">Seasonal credit to refresh your wardrobe.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex gap-3">
                  <IconDog className="text-primary flex-shrink-0" />
                  <div>
                    <h6 className="fw-bold mb-1">Studio Environment</h6>
                    <p className="small text-muted mb-0">Fully stocked kitchen, standing desks, and a pet-friendly office.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex gap-3">
                  <IconMailForward className="text-primary flex-shrink-0" />
                  <div>
                    <h6 className="fw-bold mb-1">Don’t See Your Fit?</h6>
                    <p className="small text-muted mb-0">Send your resume and a brief "Why Enduo?" note to: <strong>careers@enduoapparel.com</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ApplyNowModal
        show={showModal}
        handleClose={handleCloseModal}
        jobTitle={selectedJob}
      />
    </div>
  );
}

export default CareerPage;
