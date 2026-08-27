import {
  ArrowUp,
  Linkedin,
  Mail,
  Globe,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Footer Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >

          {/* Name */}
          <div
            style={{
              textAlign: "left",
            }}
          >
            <div
              className="footer-name"
              style={{
                fontSize: "16px",
                marginBottom: "4px",
              }}
            >
              Shailesh Raut
            </div>

            <div>
              Senior DevOps &amp; Cloud Engineer
            </div>
          </div>


          {/* Social Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >

            <a
              href="mailto:shaileshraut1997@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <Mail size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/shaileshrautprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="https://www.smrtechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="social-link"
            >
              <Globe size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="social-link"
            >
              <ArrowUp size={17} />
            </a>

          </div>

        </div>


        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(148, 163, 184, 0.15)",
            marginBottom: "18px",
          }}
        />


        {/* Copyright */}
        <div>
          © {currentYear}{" "}
          <span className="footer-name">
            Shailesh Raut
          </span>
          . All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
