import React from 'react'
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <section className="container section faq" id='faq'>
            <h2 className="card-title text-center my-4">FAQ's</h2>
            <div className="card" style={{background:'transparent', border:'none'}}>
                <div className="card-body">

                    <div className="accordion accordion-flush" id="faq-group-2">

                        <div className="accordion-item" style={{background:'transparent'}} >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-1" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    1. What types of cakes do you offer?
                                </button>
                            </h2>
                            <div id="faqsTwo-1" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                We offer a wide variety of 100% vegetarian cakes, including regular cakes, photo cakes, designer cakes, cupcakes, and more — perfect for every occasion.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-2" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    2. Are all your cakes vegetarian?
                                </button>
                            </h2>
                            <div id="faqsTwo-2" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Yes, all our cakes are purely vegetarian, made with high-quality ingredients and no egg content.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-3" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    3. Do you take custom cake orders?
                                </button>
                            </h2>
                            <div id="faqsTwo-3" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Absolutely! Share your theme, design idea, or image, and we’ll craft a custom cake tailored to your celebration.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-4" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    4. How can I place an order?
                                </button>
                            </h2>
                            <div id="faqsTwo-4" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Orders can be placed through our website/app. Simply browse our collection, select your cake, choose your delivery date, and proceed with payment.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-5" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    5. What payment methods do you accept?
                                </button>
                            </h2>
                            <div id="faqsTwo-5" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                We currently accept UPI and Cash on Delivery (COD) options for your convenience.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-6" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    6. Do you deliver in my area?
                                </button>
                            </h2>
                            <div id="faqsTwo-6" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                We currently offer delivery in the following cities:
                                <ul style={{listStyle:'none',padding:0}}>
                                    <li>Ballarpur</li>
                                    <li>Chandrapur</li>
                                    <li>Rajura</li>
                                </ul>
                                Please ensure your delivery address falls within these areas.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-7" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    7. Can I cancel or change my order?
                                </button>
                            </h2>
                            <div id="faqsTwo-7" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Yes, you can cancel or modify your order by directly contacting our support team as soon as possible. Once preparation starts, changes may not be possible.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-8" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    8. Do you offer same-day delivery?
                                </button>
                            </h2>
                            <div id="faqsTwo-8" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Same-day delivery may be available for select cakes based on location and time. Reach out to confirm availability for urgent orders.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-9" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    9. How are the cakes packaged?
                                </button>
                            </h2>
                            <div id="faqsTwo-9" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                All cakes are freshly made and carefully packaged in secure, hygienic boxes to ensure safe delivery.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-10" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    10. Do you offer cakes for bulk or events?
                                </button>
                            </h2>
                            <div id="faqsTwo-10" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                Yes! We take bulk, party, and corporate orders. Please contact us directly for personalized service and offers.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item" style={{background:'transparent'}}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" data-bs-target="#faqsTwo-11" type="button" data-bs-toggle="collapse" style={{  borderRadius: '5px',background:'#fff'}}>
                                    11. How do I contact you?
                                </button>
                            </h2>
                            <div id="faqsTwo-11" className="accordion-collapse collapse" data-bs-parent="#faq-group-2">
                                <div className="accordion-body">
                                    <p>For any queries or assistance, reach us via:</p>
                                    <h6><strong>📩 Email:</strong> <Link to="mailto:planet1.official@outlook.com"> snehalcakes@email.com</Link></h6>
                                    <h6><strong>🌍 Website:</strong> <Link to={'https://planet1.in'}>Planet1</Link></h6>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ;
