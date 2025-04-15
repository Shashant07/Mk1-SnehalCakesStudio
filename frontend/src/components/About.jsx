import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import aboutus from '../assets/imgs/aboutus.jpeg';


const About = () => {
    return (
        <>
            <div className='about-us'>
                <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", marginTop: "20px" }}>🎂 About Us</h1>
                <Card style={{ padding: '20px', background:'transparent', border: 'none' }}>
                <Row>
                    <Col lg={6} className='my-2'>
                        <Image src={aboutus} alt='about us' fluid className='about-us-img' style={{ borderRadius: '10px' }} />
                    </Col>
                    <Col lg={6} className='my-2'>
                        <h5>Welcome to Snehal Cakes Studio – Where Every Cake Has a Story!</h5>
                        <p>💡 At Snehal Cakes Studio, we believe that every celebration deserves a sweet touch. What started as a small home-kitchen passion has now grown into a full-fledged cake studio, delivering love and joy in the form of delicious, 100% vegetarian cakes across Ballarpur and Chandrapur.</p>
                        <p>🚀 We specialize in custom-designed cakes, made-to-order occasion cakes, and delightful treats like cupcakes and jar cakes. Every creation is baked fresh with premium ingredients, handcrafted with care, and delivered with love.</p>
                        <p>🤝 Whether you're celebrating a birthday, anniversary, wedding, baby shower, or simply want to surprise someone – we’ve got the perfect cake just for you.</p>
{/*                         
                        
                        <h6><strong>✅ Core Values</strong></h6>
                        <h6><strong>💡 Innovation</strong><small> – We embrace creativity & technology to build future-ready solutions.</small></h6>
                        <h6><strong>🤝 Customer-Centric</strong><small> – Your success is our priority. We tailor solutions to your needs.</small></h6>
                        <h6><strong>🚀 Scalable Growth</strong><small> – We design solutions that grow with your business.</small></h6> */}
                        
                    </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={4}>
                            <h5>💡 Our Mission</h5>
                            <p>To spread joy, one sweet bite at a time. We’re here to make your moments memorable, with cakes that not only look amazing but taste unforgettable.</p>
                        </Col>
                        <Col lg={4}>
                            <h5>🍰 Why Choose Us?</h5>
                            <ul>
                                <li><strong>Pure Veg Cakes</strong> – Eggless, always! </li>
                                <li><strong>Freshly Baked to Order</strong> – No pre-made stock.</li>
                                <li><strong>Personalized Designs</strong> – Because your cake should be as unique as you.</li>
                                <li><strong>Local Love</strong> – Serving Ballarpur & Chandrapur with heart.</li>
                                <li><strong>Quality & Hygiene</strong> – We follow strict cleanliness standards.</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h5>👩‍🍳 From Our Kitchen to Your Celebration</h5>
                            <p>Behind every cake is a story — and we’re honored to be a part of yours. Whether it’s a last-minute surprise or a planned party centerpiece, we promise to deliver more than just a dessert — we deliver emotion.</p>
                        </Col>
                    </Row>
                </Card>    
            </div>  
        </>
    )
}

export default About;