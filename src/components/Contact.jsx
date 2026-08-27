import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-content">

          {/* Section Heading */}
          <span className="section-subtitle">
            GET IN TOUCH
          </span>

          <h2 className="section-title">
            Let's Build Something
            <span className="gradient-text">
              Great Together
            </span>
          </h2>

          <p className="section-description">
            I am open to discussing DevOps, Cloud Engineering,
            AWS infrastructure, CI/CD automation, and
            technology opportunities.
          </p>


          {/* Contact Buttons */}
          <div className="contact-buttons">

            <a
              href="mailto:shaileshraut1997@gmail.com"
              className="btn btn-primary"
            >
              <Mail size={17} />
              Send Me an Email
              <ArrowUpRight size={16} />
            </a>

            <a
              href="tel:+919922771469"
              className="btn btn-outline"
            >
              <Phone size={17} />
              Call Me
            </a>

          </div>


          {/* Contact Information */}
          <div className="contact-info">

            {/* Email */}
            <a
              href="mailto:shaileshraut1997@gmail.com"
              className="contact-item"
            >
              <Mail size={16} />

              shaileshraut1997@gmail.com
            </a>


            {/* Phone */}
            <a
              href="tel:+919922771469"
              className="contact-item"
            >
              <Phone size={16} />

              +91 99227 71469
            </a>


            {/* Location */}
            <div className="contact-item">
              <MapPin size={16} />

              Bengaluru, Karnataka, India
            </div>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shaileshrautprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Linkedin size={16} />

              LinkedIn
            </a>


            {/* Website */}
            <a
              href="https://www.smrtechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Globe size={16} />

              Website
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
