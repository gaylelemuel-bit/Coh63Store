import { useState } from 'react';
import { IconMailOff,IconMail } from '@tabler/icons-react';
import './About.css'

function About() {
 const [isEmailVisible, setIsEmailVisible] = useState(false);

  // Use the setter function 'setIsEmailVisible'
  const showEmail = () => setIsEmailVisible(true);
  const hideEmail = () => setIsEmailVisible(false);

    return (
        <>
            <div className="container py-5-md-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 display-md-3  fw-bold border-bottom d-inline-block pb-2 text-uppercase">About Us</h1>
                    <div className='my-4'>
                        <img src='https://i.etsystatic.com/53685273/r/il/d02a74/6452033366/il_fullxfull.6452033366_6loa.jpg' alt=''
                            style={{ maxHeight: '500px', width: '80%', objectFit: 'contain' }} />
                        <h3 className="h5 fw-bold mb-1">Marcus Stone</h3>
                        <p className="text-danger small fw-semibold text-uppercase mb-2">ceo</p>
                        <p className="card-text text-muted">Retired military veteran that believes knowlegde of Jesus Christ gives you eternal life .</p>
                    </div>
                </div>
                <section className="py-5 bg-light">
                    <div className="container"> {/* 'container' keeps the 3-3 grid centered and balanced */}
                        {/* Section Heading */}
                        <div className="row mb-5">
                            <div className="col text-center">
                                <h2 className="fw-bold text-uppercase">Meet The Team</h2>
                                <div className="mx-auto bg-primary" style={{ height: '.2rem', width: '5rem' }}></div>
                            </div>
                        </div>

                        {/* Team Grid: 1 per row mobile, 2 per row tablet, 3 per row desktop */}
                        <div className="row g-4 justify-content-center">

                            {/* Member 1 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://i.pinimg.com/736x/72/c3/e4/72c3e410e9164003de868a2495e9f6e2.jpg"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px' }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Olivia Sterling</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Business Anaylst </p>
                                        <p className="card-text text-muted">Specializes in decoding consumer behavior and market trends to ensure our store stays ahead of the curve.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 2 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://faithkind.com/cdn/shop/products/Trust-God-Bro-T-shirt.png?v=1630313469&width=416"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px' }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Winston Banks</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Designer</p>
                                        <p className="card-text text-muted">Transforms scripture and fashion into visual appealing material.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 3 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://i.etsystatic.com/26179306/r/il/651caf/4605445123/il_fullxfull.4605445123_e06p.jpg"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px' }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Naomi Knight</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Marketing Manager</p>
                                        <p className="card-text text-muted">Specializes in "puttin it on" for jesus for our global community.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 4 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://i.etsystatic.com/54165517/r/il/f31c3d/6199409096/il_fullxfull.6199409096_lna8.jpg"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px' }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Xavier Cross</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Developer</p>
                                        <p className="card-text text-muted">Backbone of our digital infrastructure while specializing in high-performance frameworks</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 5 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://i.etsystatic.com/24377826/r/il/dac87d/4315802866/il_794xN.4315802866_6uad.jpg"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px', }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Audrey Miller</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Qualiity Assurance</p>
                                        <p className="card-text text-muted"> believes that every interaction is an opportunity to build a relationship.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Member 6 */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm text-center">
                                    <img
                                        src="https://i.etsystatic.com/50067715/r/il/dbf757/5767016450/il_1080xN.5767016450_bykh.jpg"
                                        className="card-img-top object-fit-cover"
                                        alt="Jane Doe"
                                        style={{ height: '350px' }}
                                    />
                                    <div className="card-body p-4">
                                        <h3 className="h5 fw-bold mb-1">Mateo Wells</h3>
                                        <p className="text-primary small fw-semibold text-uppercase mb-2">Content Writer</p>
                                        <p className="card-text text-muted"> The custodian of our brand’s personality and believes that every product has a story.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mb-5">
                            <h2 className="h3 fw-semibold text-dark mb-3">Our Mission</h2>
                            <p className="fs-5 text-secondary lh-lg">
                                Welcome to <strong>Enduo Apparel</strong>. We are a brand dedicated to blending faith and fashion, creating clothing that is both stylish and purposeful. Our mission is to provide believers with high-quality apparel that allows them to "put on" their faith in a tangible way every single day.</p>
                        </div>
                        <div className="bg-light p-4 rounded-3 border-start border-4 border-dark mb-5 shadow-sm">
                            <h2 className="h4 fw-bold mb-3">Rooted in Purpose</h2>
                            <p className="mb-0 text-dark">
                                Founded in 2025, Enduo Apparel was born out of a radical desire to strip away worldly distractions and clothe ourselves in the character of Christ. Our foundation is built upon the mandate of <strong>Romans 13:14:</strong> <em>"Rather, clothe yourselves with the Lord Jesus Christ, and do not think about how to gratify the desires of the flesh.""</em>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-secondary lh-lg">
                                In a world that often chases fleeting trends, we stand firm in the Truth, designing pieces that combine modern aesthetic with biblical substance. Every garment we produce is crafted to be a "billboard for God," allowing you to wear your testimony wherever you go.
                            </p>
                            <p className="text-secondary lh-lg">
                                However, we recognize that style without substance is hollow. We are deeply moved by the sobering warning in <strong>Hosea 4:6</strong>: <em>"My people are destroyed for lack of knowledge."</em> We refuse to let our community perish in the shallow end. Enduo Apparel exists to bridge the gap between high-caliber craftsmanship and biblical literacy.
                            </p>
                        </div>
                        <div className="text-center mt-5 pt-4 border-top">
                            <p className="fst-italic text-muted">
                                We don't just design apparel; we curate reminders of Truth, ensuring that the "knowledge of God" is worn, shared, and lived out, so that His people may not only survive but flourish in His wisdom.
                            </p>
                        </div>
                        <div>
                            {isEmailVisible ? (
                                <p>purpose@enduoapparel.com</p>
                            ) : (
                                <p>Click the button below to see my email</p>
                            )}
                            <button className='btn btn-secondary py-1' onClick={hideEmail}><IconMailOff stroke={2} />Hide Email</button>
                            <button className='btn btn-primary py-1 ms-2' onClick={showEmail}><IconMail stroke={2} />Show Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
