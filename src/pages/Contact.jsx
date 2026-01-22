import { IconSend, IconBrandWhatsapp } from '@tabler/icons-react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    alert("Message sent successfully!");
    e.target.reset(); 
  };

  return (
    <>
      <div className="container py-4 ms-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Enduo Apparel.</h1>
          <p className="lead text-muted">clothing created for his glory</p>
        </div>

        <section className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <form onSubmit={handleSubmit} className="shadow-sm p-4 border rounded bg-white">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name="name" placeholder="your name" required />
                <label htmlFor="name">your name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                <label htmlFor="email">email address</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="intent" name="intent">
                  <option value="order">order inquiry</option>
                  <option value="return">exchanges & returns</option>
                  <option value="prayer">prayer request</option>
                </select>
                <label htmlFor="intent">how can we serve you?</label>
              </div>

              <div className="form-floating mb-4">
                <textarea className="form-control" id="message" name="message" placeholder="how can we help?" style={{ height: "150px" }}></textarea>
                <label htmlFor="message">message</label>
              </div>

              <button type="submit" className="btn btn-dark w-100 py-2 fw-bold shadow-sm">
                <IconSend stroke={2} size={20} className="me-2" />
                send message
              </button>
            </form>
          </div>
        </section>
      </div>
      <button
        className="support-fab d-none d-md-flex"
        onClick={() => window.open('https://wa.me', '_blank')}
      ><p className='online-dot '></p>
        <IconBrandWhatsapp stroke={2} color='lime' />Chat
      </button>
    </>
  );
}

export default Contact;

