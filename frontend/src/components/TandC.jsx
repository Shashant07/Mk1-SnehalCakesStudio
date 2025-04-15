import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TandC = () => {

    return (
        <Container className="section faq" id='faq'>
            <h2 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Terms and Conditions</h2>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <h6><strong>Last Updated: 15th April 2025</strong></h6>
                <p>Welcome to <strong>Snehal Cakes Studio</strong>! These Terms and Conditions outline the rules and regulations for using our website and services.</p>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>1. Acceptance of Terms</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>By accessing or using the Snehal Cakes Studio app/website, you agree to be bound by these terms.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>2. Account Creation</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Users must provide accurate and complete information.</li>
                                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>3. Ordering & Payments</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Orders must be placed through the app or website.</li>
                                        <li>Prices are inclusive of applicable taxes unless mentioned.</li>
                                        <li>Payments can be made via online methods or Cash on Delivery (if available).</li>
                                        <li>Orders are confirmed only after successful payment or manual confirmation for custom cakes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>4. Custom Cake Orders</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Custom orders require advance booking (usually 24-48 hours).</li>
                                        <li>Design references will be matched as closely as possible but may vary.</li>
                                        <li>Refunds may not be applicable for custom orders unless due to damage or major errors.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>5. Cancellations & Refunds</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Orders can be canceled within 1 hour of placing.</li>
                                        <li>Refunds are processed within 5–7 working days (subject to payment gateway).</li>
                                        <li>Custom cake cancellations are not refundable if preparation has begun.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>6. Delivery Terms</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Delivery is available within selected areas and timings.</li>
                                        <li>You are responsible for providing accurate delivery information.</li>
                                        <li>We are not liable for delays caused by incorrect address, traffic, or force majeure.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>7. User Conduct</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    You agree:
                                    <ul>
                                        <li>Not to misuse the app for illegal or fraudulent purposes.</li>
                                        <li>Not to post offensive, misleading, or harmful content.</li>
                                        <li>Not to interfere with the security of the service.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>8. Intellectual Property</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <ul>
                                        <li>All content, logos, product photos, and app designs are owned by Snehal Cakes Studio. Unauthorized use is prohibited.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>9. Liability Disclaimer
                                    </h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    We are not responsible for:
                                    <ul>
                                        <li>Allergic reactions (we disclose ingredients where possible)</li>
                                        <li>Minor variation in cake design or color</li>
                                        <li>Third-party errors (e.g., payment gateway failures/ platform issues)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-10" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>10. Changes to Terms
                                    </h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-10" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    We may update these Terms & Conditions anytime. Continued use of the app constitutes acceptance of the changes.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-11" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>11. Contact Us</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-11" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>If you have any questions, concerns, or require assistance, feel free to contact us:</p>
                                    <h6><strong>📩 Email:</strong> <Link to="mailto:planet1.official@outlook.com"> planet1.official@outlook.com</Link></h6>
                                    <h6><strong>📞 Phone:</strong> +91 123456789</h6>
                                    <h6><strong>🌍 Website:</strong> <Link to={'https://planet1.in'}>Planet1</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default TandC;
