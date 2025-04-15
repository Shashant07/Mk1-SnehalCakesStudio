import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Policy = () => {

    return (
        <Container className="section faq" id='faq'>
            <h2 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>Privacy Policy</h2>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <h6><strong>Last Updated: 15th April 2025</strong></h6>
                <p>At <strong>Snehal Cakes Studio</strong>, we value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and protect your information.</p>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>1. Information We Collect</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We may collect the following types of information:</p>
                                    <ul>
                                        <li><strong>Personal Information:</strong> Name, email, phone number, delivery address</li>
                                        <li><strong>Account Info:</strong> Login credentials (secured and encrypted)</li>
                                        <li><strong>Order Details:</strong> Products ordered, preferences (e.g. eggless, flavors), custom cake instructions</li>
                                        <li><strong>Payment Info:</strong> Payment method and transaction status (processed securely via third-party gateways)</li>
                                        <li><strong>Usage Data:</strong> App interactions, pages visited, time spent</li>
                                        <li><strong>Location Data:</strong> If you allow GPS-based delivery tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>2. How We Use Your Information</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We use the data to:</p>
                                    <ul>
                                        <li>Process and deliver orders</li>
                                        <li>Provide personalized customer support</li>
                                        <li>Improve app performance and user experience</li>
                                        <li>Send updates, offers, and promotional emails (you can opt out anytime)</li>
                                        <li>Detect fraud or unauthorized activity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>3. Data Protection & Security</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We implement industry-standard measures to protect your data:</p>
                                    <ul>
                                        <li>SSL encryption for all transactions</li>
                                        <li>Secure database storage</li>
                                        <li>Access controls and authentication</li>
                                        <li>No sharing of personal data with third-party marketers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>4. Sharing of Information</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We only share information with:</p>
                                    <ul>
                                        <li>Delivery partners (name, contact, and address)</li>
                                        <li>Payment gateways (payment info only)</li>
                                        <li>Legal authorities if required by law</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>5. Your Rights & Choices</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>You have the following rights regarding your data:</p>
                                    <ul>
                                        <li>Access, update, or delete your data anytime</li>
                                        <li>Request to disable your account</li>
                                        <li>Contact us for privacy-related queries: [snehalcakes@email.com/ +91 1234567890]</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>6. Cookies & Tracking Technologies</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We may use cookies or tracking tools to enhance app experience, understand user behavior, and provide relevant content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>7. Children’s Privacy</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>Our services are not intended for individuals under 13. We do not knowingly collect data from children.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>8. Policy Updates</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>We may revise this Privacy Policy and will notify users of significant changes via email or app notification.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    <h4>9. Contact Us</h4>
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>If you have any questions about this Privacy Policy or your data, please reach out to us:</p>
                                    <h6><strong>📩 Email:</strong> <Link to="mailto:planet1.official@outlook.com"> snehalcakes@email.com</Link></h6>
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

export default Policy;
