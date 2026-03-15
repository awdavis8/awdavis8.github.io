import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

/**
 * Contact form component that submits directly via EmailJS.
 */
function ContactForm() {
  const formRef = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    // Sends form field values from the form DOM node to the EmailJS API
    emailjs
      .sendForm(
        'service_u2nt2qe', // EmailJS service ID
        'template_t129oi3', // EmailJS template ID
        formRef.current,
        'rqyPA8hy7oLZRjmLR' // EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!')
          formRef.current?.reset()
        },
        (error) => {
          alert('Failed to send message. Please try again later.')
        }
      )
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail} autoComplete="on">

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" autoComplete="name" required />

      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" autoComplete="email" required />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" autoComplete="off" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="6" autoComplete="off" required />

      <button type="submit" className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm