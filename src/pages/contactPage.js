import React from "react";
import '../App.css'
import Navbar from "../util/navbarUtil";
import { Container, Row, Col } from "react-bootstrap";

const ContactPage = () => {
    return (
        <div>
            {/*this handles importing navbar from navbarUtil.js*/}
            <header>
                <Navbar />
            </header>

            {/*this handles the contact page content*/}
            <Container>
                <Row className="mb-5 mt-3">
                    <Col lg='8'>
                        <h1 className="display-4 mb-4">
                            Contact Us
                        </h1>
                    </Col>
                </Row>

                <Row className="sec_sp">
                    <Col lg='5' className="mb-5">
                        <h3 className="color_sec py-4">Email or Give Us a Call</h3>
                        <address>
                            <strong>Email : Jewelryofthenextage@example.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong>Phone : +1 770-XXX-XXXX</strong>
                            </p>
                        </address>
                    </Col>

                    <Col lg='7' className="d-flex align-items-center" >
                        <form className="contact__form w-100">
                            <Row>
                                <Col lg='6' className="form-group">
                                    <input 
                                        className="form-control"
                                        id="name"
                                        name='name'
                                        placeholder="Name"
                                        type="text"
                                    />
                                </Col>
                                <Col lg='6' className="form-group">
                                    <input 
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        placeholder="Email"
                                        type="email"
                                    />
                                </Col>
                            </Row>
                            <textarea className="form-control" id="message" name="message" placeholder="Type your message here..." rows={5} ></textarea>
                            <br />
                            <Col lg='12' className="form-group" >
                                <button className="btn ac_btn" type="submit">Send!</button>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Container>

            {/*this handles the bottom directory*/}
            <div className="directory">
                <nav>
                    <ul>
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="ringPage">
                            <li>rings</li>
                        </a>
                        <a href='diamondPage'>
                            <li>diamonds</li>
                        </a>
                        <a href="earringPage">
                            <li>earrings</li>
                        </a>
                        <a href="necklacePage">
                            <li>necklaces</li>
                        </a>
                        <a href="watchesPage">
                            <li>watches</li>
                        </a>
                        <a href="chainPage">
                            <li>chains</li>
                        </a>
                        <a href="contactPage">
                            <li>contact us</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
};

export default ContactPage;