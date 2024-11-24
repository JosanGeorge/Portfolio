import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { RiInstagramLine } from 'react-icons/ri';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s40ojcs', 'template_eh9sppo', form.current, 'Kg2rhkR8J5TfgshRJ')

        e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>josangeorge27@gmail.com</h5>
                        <a href="mailto:josangeorge27@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiInstagramLine className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>josan.george</h5>
                        <a href="https://www.instagram.com/josan.george/" target="_blank" >Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Josan George</h5>
                        <a href="https://www.linkedin.com/in/josan-george-a86370227/" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='John' required />
                    <input type="email" name='email' placeholder='example@example.com' required />
                    <textarea name='message' rows="7" placeholder='Hi Josan, I have a question...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact