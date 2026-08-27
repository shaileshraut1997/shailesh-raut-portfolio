import {
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Settings,
  ShieldCheck,
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: <BriefcaseBusiness size={22} />,
      number: "6.5+",
      label: "Years Experience",
    },
    {
      icon: <Cloud size={22} />,
      number: "AWS",
      label: "Cloud Expertise",
    },
    {
      icon: <Code2 size={22} />,
      number: "CI/CD",
      label: "Automation",
    },
    {
      icon: <Settings size={22} />,
      number: "IaC",
      label: "Terraform",
    },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-subtitle">
            ABOUT ME
          </span>

          <h2 className="section-title">
            Building Reliable & Scalable
            <span className="gradient-text">
              Cloud Solutions
            </span>
          </h2>

          <p className="section-description">
            A little about my professional journey, experience,
            and the technologies I work with.
          </p>
        </div>

        <div className="about-grid">

          {/* Left Side */}
          <div className="about-visual">

            <div className="about-card">

              <div className="about-card-inner">

                <div className="about-initials">
                  SR
                </div>

              </div>

            </div>

          </div>


          {/* Right Side */}
          <div className="about-content">

            <h3>
              Senior DevOps & Cloud Engineer
            </h3>

            <p>
              I am a Senior DevOps & Cloud Engineer with{" "}
              <strong>6.5+ years of professional experience</strong>{" "}
              working with cloud infrastructure, CI/CD automation,
              Infrastructure as Code, application deployments,
              and production environments.
            </p>

            <p>
              My primary expertise is in{" "}
              <strong>AWS, Terraform, Jenkins, Git, Docker,
              Kubernetes, Java applications, and cloud monitoring.</strong>{" "}
              I have worked on enterprise insurance platforms and
              production environments where reliability, security,
              scalability, and automation are critical.
            </p>

            <p>
              I have experience collaborating with Development,
              QA, Support, and Operations teams across DEV, SIT,
              UAT, PREPROD, and PROD environments. I also work with
              Azure DevOps for source-code and delivery workflows
              where required.
            </p>

            <p>
              Along with enterprise DevOps work, I also develop
              websites and automation solutions through{" "}
              <strong>SMR Technologies</strong>, including
              AI-powered email automation and business workflow
              integrations.
            </p>


            {/* Highlight Cards */}
            <div className="about-stats">

              {highlights.map((item, index) => (
                <div
                  className="stat-card"
                  key={index}
                >
                  <div className="skill-icon">
                    {item.icon}
                  </div>

                  <span className="stat-number">
                    {item.number}
                  </span>

                  <span className="stat-label">
                    {item.label}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
