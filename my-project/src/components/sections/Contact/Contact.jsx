import { useState } from 'react'
import { useFormHandler } from '../../../hooks/useFormHandler'
import { useInViewport } from '../../../hooks/useInViewport'
import './Contact.css'

export function Contact() {
  const { ref, hasBeenInViewport } = useInViewport()
  const [submitStatus, setSubmitStatus] = useState(null)

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const handleFormSubmit = async (values) => {
    console.log('Form submitted:', values)
    setSubmitStatus('success')
    resetForm()
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormHandler(initialValues, handleFormSubmit)

  return (
    <section id="contact" className="section section--contact" ref={ref}>
      <div className="section__container">
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__content">
          <div className="contact__info">
            <p className="contact__intro">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <h4>Email</h4>
                <a href="mailto:stavinadsouza@gmail.com">
                  stavinadsouza@gmail.com
                </a>
              </div>

              <div className="contact__detail">
                <h4>Phone</h4>
                <a href="tel:9606835113">
                  9606835113
                </a>
              </div>

              <div className="contact__detail">
                <h4>Location</h4>
                <p>Karnataka, India</p>
              </div>

              <div className="contact__detail">
                <h4>Social</h4>
                <a href="https://www.linkedin.com/in/stavinadsouza/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me more..."
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="contact__submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="contact__success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
