import React, { useState,useEffect } from 'react';
import '../styles/contact.css'
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { SiMinutemailer } from 'react-icons/si'
import { Container, Button, Alert } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [success, setSucess] = useState(false)
    const [status, setStatus] = useState('warning')
    const [message, setMessage] = useState('Please fill all fields')
    const [submessage, setSubmessage] = useState('Thank You.........!!')
    const [show, setShow] = useState(false)
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        phone_no: '',
        reply_to: '',
    });

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    function sendEmail(e) {
        e.preventDefault();
        if (toSend.from_name === '' && toSend.reply_to === '') {
            setShow(true)
            setStatus('warning')
            setMessage('Missing Fields')
            setSubmessage('please Fill All Fields .....!')
            setTimeout(() => {
                setShow(false)
            }, 2000);
        }
        else {
            emailjs.send(
                'service_2g32yjj',
                'template_ija0kat',
                toSend,
                'vyFuRY4lwOMTbguQC'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('success')
                    setMessage('Your Message is sent successfully')
                    setSubmessage('We will Contact you soon..... Thank You......!! ')
                    setShow(true)
                    setToSend({
                        from_name: '',
                        to_name: '',
                        message: '',
                        phone_no: '',
                        reply_to: '',
                    })
                    setTimeout(() => {
                        setShow(false)
                    }, 2000);

                })
                .catch((err) => {
                    setStatus('danger')
                    setMessage('Something Went Wrong')
                    setSubmessage('please Fill Contact Form Again.....!')
                    setShow(true)
                    console.log('FAILED...', err);
                    setTimeout(() => {
                        setShow(false)
                    }, 3000);

                });
        }

    }

    return (
        <>
            <Container className='p-4 mt-4'>
                {show && <Alert variant={status} onClose={() => setShow(false)} dismissible >
                    <Alert.Heading>{message}</Alert.Heading>
                    <p>
                        {submessage}</p>
                </Alert>}

            </Container>
            <div class="container contact" id='contact' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div class="row">
                    <div class="col-md-3">
                        <div class="contact-info">
                            <SiMinutemailer className='cont' />
                            <h2>Contact Us</h2>
                            <h4>We would love to hear from you !</h4>
                            <h4 className='cpmy'>Powered by<br /><br /> @The Variables Design</h4>
                        </div>		</div>
                    <div class="col-md-9">
                        <form>
                            <div class="contact-form">
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="fname">First Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text"
                                            name='from_name'
                                            required="required"
                                            value={toSend.from_name}
                                            onChange={handleChange}
                                            class="form-control" id="fname" placeholder="Enter Full Name" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="lname">Contact no.</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control"
                                            value={toSend.phone_no}
                                            onChange={handleChange}
                                            id="lname" placeholder="Enter Contact Number" name="phone_no" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email:</label>
                                    <div class="col-sm-10">

                                        <input type="email" class="form-control" id="email" required="required"
                                            name='reply_to'
                                            value={toSend.reply_to}
                                            onChange={handleChange}
                                            placeholder="Enter email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="comment">Message:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" id="comment" required
                                            name='message'
                                            placeholder='Your message'
                                            value={toSend.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-secondary" onClick={sendEmail}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Contact;
