import { IconSend } from '@tabler/icons-react';

function Contact() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Enduo Apparel.</h1>
                <p className="lead text-muted">Clothing created for His Glory</p>
            </div>

            <section className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <form action="#" method="POST" className="shadow-sm p-4 border rounded bg-white">
                        
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <select className="form-select" id="intent" name="intent" aria-label="Service select">
                                <option value="order">Order Inquiry</option>
                                <option value="return">Exchanges & Returns</option>
                                <option value="prayer">Prayer Request</option>
                                <option value="collab">Ministry Collaboration</option>
                            </select>
                            <label htmlFor="intent">How can we serve you?</label>
                        </div>

                        <div className="form-floating mb-4">
                            <textarea className="form-control" id="message" name="message" placeholder="How can we help?" style={{ height: "150px" }}></textarea>
                            <label htmlFor="message">Message</label>
                        </div>

                        <button type="submit" className="btn btn-dark w-100 py-2 fw-bold shadow-sm"><IconSend stroke={2} />
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
