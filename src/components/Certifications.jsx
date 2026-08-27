import {
  Award,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
} from "lucide-react";

function Certifications() {
  const certifications = [
    {
      icon: <Cloud size={24} />,
      title: "AWS Certified Solutions Architect — Associate",
      provider: "Amazon Web Services",
      description:
        "Certification focused on designing secure, scalable, highly available, and cost-effective applications and infrastructure on AWS.",
    },

    {
      icon: <Code2 size={24} />,
      title: "AWS Certified Developer — Associate",
      provider: "Amazon Web Services",
      description:
        "Certification covering application development, deployment, and maintenance using AWS services and cloud-native technologies.",
    },

    {
      icon: <Cpu size={24} />,
      title: "AWS Certified AI Practitioner",
      provider: "Amazon Web Services",
      description:
        "Certification covering fundamental AI and machine learning concepts and their practical applications within AWS.",
    },

    {
      icon: <Award size={24} />,
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      description:
        "Foundation-level certification demonstrating knowledge of AWS Cloud concepts, services, security, architecture, and billing.",
    },

    {
      icon: <CheckCircle2 size={24} />,
      title: "Full Stack Development Certification",
      provider: "JSpiders — Hebbal",
      description:
        "Full Stack Development certification covering application development fundamentals and web technologies.",
    },
  ];

  return (
    <section
      id="certifications"
      className="section section-light"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-subtitle">
            CERTIFICATIONS
          </span>

          <h2 className="section-title">
            Professional
            <span className="gradient-text">
              Certifications
            </span>
          </h2>

          <p className="section-description">
            Industry certifications and professional training
            supporting my cloud, DevOps, and software development
            expertise.
          </p>

        </div>


        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((certification, index) => (
            <div
              className="certification-card"
              key={index}
            >

              {/* Icon */}
              <div className="certification-icon">
                {certification.icon}
              </div>


              {/* Content */}
              <div>

                <h3>
                  {certification.title}
                </h3>

                <p
                  style={{
                    marginBottom: "8px",
                    color: "var(--primary)",
                    fontWeight: "700",
                  }}
                >
                  {certification.provider}
                </p>

                <p>
                  {certification.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
