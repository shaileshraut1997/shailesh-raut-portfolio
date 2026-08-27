import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* =========================
            LEFT - HERO CONTENT
        ========================== */}
        <div className="hero-content fade-up">

          <div className="hero-intro">
            <span className="hero-intro-dot"></span>
            Available for DevOps & Cloud Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm
            <span className="gradient-text">
              Shailesh Raut
            </span>
          </h1>

          <h2 className="hero-role">
            Senior DevOps & Cloud Engineer
          </h2>

          <p className="hero-description">
            Senior DevOps & Cloud Engineer with{" "}
            <strong>6.5+ years of experience</strong> in AWS and
            Azure, specializing in cloud infrastructure, CI/CD
            automation, Infrastructure as Code, containerization,
            and reliable application delivery.
          </p>

          {/* Location */}
          <div className="hero-location">
            <MapPin size={16} />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/Shailesh-Raut-Resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://github.com/shaileshraut1997"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href="https://linkedin.com/in/shaileshrautprofile"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <a
              href="mailto:shaileshraut1997@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT - PROFILE PHOTO
        ========================== */}
        <div className="hero-image-wrapper fade-up">

          <div className="hero-image-container">

            <img
              src="/profile/profile-photo.jpg"
              alt="Shailesh Raut - Senior DevOps & Cloud Engineer"
              className="hero-image"
            />

            {/* Experience Badge */}
            <div className="hero-badge">

              <div className="hero-badge-icon">
                <ArrowDown size={17} />
              </div>

              <div>
                <strong>6.5+ Years</strong>
                <br />
                <span>DevOps Experience</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
