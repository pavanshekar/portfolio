import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { useGetContactsQuery } from "../../API/api";
import emailjs from "@emailjs/browser";

const Contact = (e) => {
    
    const { data: contacts, isFetching } = useGetContactsQuery();

    const [contactsDetails, setContactDetails] = useState(contacts);

    const [formFields, setFormFields] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState("");

    const form = useRef();

    useEffect(() => {
        setContactDetails(contacts);
    }, [contactsDetails, contacts]);

    if (isFetching) return "loading";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
        setSuccessMessage("");
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (!formFields.user_name.trim()) {
            errors.user_name = 'Name is required';
            isValid = false;
        }
    
        if (!formFields.subject.trim()) {
            errors.subject = 'Subject is required';
            isValid = false;
        }
    
        if (!formFields.message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }
    
        if (!formFields.user_email.trim()) {
            errors.user_email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formFields.user_email)) {
            errors.user_email = 'Email address is invalid';
            isValid = false;
        }
    
        setFormErrors(errors);
        return isValid;
    };   

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; 
        }

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccessMessage("Message sent successfully!");
                    setFormFields({
                        user_name: '',
                        user_email: '',
                        subject: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div id="contact">
            <div className="reachme-container">
                <div className="reachme-title2">
                    <h2>I Want To Hear From You</h2>

                    <h3>Contact Me</h3>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="reachme-title">
                            <div className="row">
                                {contactsDetails &&
                                    contactsDetails.map((details) => (
                                        <div className="contact-info  " key={details.id}>
                                            <div className="contact-details">
                                                <img src={details.icon} alt="icon"/>
                                                <div className="contact-mi">
                                                    <h4 className="icon-name">{details.contact_name}:</h4>
                                                    <p className="d-name">{details.contact_info}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 email-me container">
                        <form
                            action=""
                            className="contact-form"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <div className="row">
                                <div className="col-md-12 mb-3 hire-me-title"></div>
                                <div className="col-md-6 ">
                                    <input
                                        type="text"
                                        name="user_name"
                                        id=""
                                        required
                                        placeholder="Enter Your Name"
                                        value={formFields.user_name}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.user_name && <div className="error">{formErrors.user_name}</div>}
                                </div>
                                <div className="col-md-6 ">
                                    <input
                                        type="email"
                                        name="user_email"
                                        id=""
                                        required
                                        placeholder="Enter Your Email"
                                        value={formFields.user_email}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.user_email && <div className="error">{formErrors.user_email}</div>}
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        name="subject"
                                        id=""
                                        required
                                        placeholder="Enter Subject"
                                        value={formFields.subject}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.subject && <div className="error">{formErrors.subject}</div>}
                                </div>
                                <div className="col-md-12 mb-2">
                                    <textarea
                                        name="message"
                                        id=""
                                        required
                                        cols="60"
                                        rows="8"
                                        placeholder="Your Message"
                                        value={formFields.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    {formErrors.message && <div className="error">{formErrors.message}</div>}
                                    <button className="hire-btn" type="submit">
                                        Send Message
                                    </button>
                                    {successMessage && <div className="success-message">{successMessage}</div>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
