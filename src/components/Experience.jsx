import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      date: "May 2025 — Present",
      role: "Senior DevOps & Cloud Engineer",
      company: "Wipro Limited",
      location: "Bengaluru, Karnataka, India",

      responsibilities: [
        "Managed CI/CD pipelines using Jenkins for enterprise Java application deployments and release automation.",
        "Built and maintained Golden AMIs using Packer, Puppet, HashiCorp Vault, and Jenkins for AWS EC2 environments.",
        "Developed and maintained AWS infrastructure using Terraform and Infrastructure as Code (IaC) best practices.",
        "Troubleshot Jenkins pipeline failures, AMI build issues, deployment problems, and AWS infrastructure incidents.",
        "Worked with Azure DevOps (ADO) for source-code and delivery workflows.",
        "Managed cloud infrastructure, access, and secrets using AWS services and HashiCorp Vault.",
        "Collaborated with Development, QA, and Support teams across DEV, SIT, UAT, PREPROD, and PROD environments.",
        "Performed deployment validation, application health checks, production support, and incident troubleshooting for insurance applications.",
      ],
    },

    {
      date: "Apr 2022 — Apr 2025",
      role: "System Engineer",
      company: "Tata Consultancy Services (TCS)",
      location: "Bengaluru, Karnataka, India",

      responsibilities: [
        "Designed and managed scalable cloud infrastructure across AWS and hybrid environments using Terraform.",
        "Worked with Java-based enterprise applications and supported application deployment, configuration, and production operations.",
        "Built and maintained CI/CD pipelines using Jenkins, Git, Docker, Kubernetes, and Maven.",
        "Automated infrastructure provisioning, configuration management, and deployment workflows using Infrastructure as Code practices.",
        "Managed AWS services including EC2, IAM, VPC, S3, Load Balancers, and CloudWatch.",
        "Worked with Azure DevOps for source-code management and application delivery workflows.",
        "Implemented monitoring and logging using Datadog, CloudWatch, Azure Monitor, and Loggly.",
        "Collaborated with Development, QA, and Support teams to improve application performance, scalability, availability, and production reliability.",
      ],
    },

    {
      date: "Jul 2021 — Mar 2022",
      role: "Associate Technology L2",
      company: "Suremind Solution Pvt. Ltd.",
      location: "Bengaluru, Karnataka, India",

      responsibilities: [
        "Built and maintained CI/CD pipelines using Jenkins, Git, and Maven for Java application build and deployment automation.",
        "Containerized Java applications using Docker and deployed workloads on Kubernetes environments.",
        "Automated infrastructure provisioning and deployment workflows using Terraform, Bash, and Infrastructure as Code practices.",
        "Managed AWS services including EC2, IAM, VPC, S3, and Load Balancers.",
        "Worked with Azure DevOps for source-code and delivery-related activities.",
        "Monitored application and infrastructure performance using Datadog and AWS CloudWatch.",
        "Troubleshot deployment failures, application issues, infrastructure problems, and production incidents.",
        "Collaborated with development and operations teams to improve deployment efficiency and system reliability.",
      ],
    },

    {
      date: "Aug 2019 — Mar 2021",
      role: "Client Relationship Executive",
      company: "ECPL Pvt. Ltd.",
      location: "Bengaluru, Karnataka, India",

      responsibilities: [
        "Provided production support for Java applications, ensuring application availability and system reliability.",
        "Troubleshot production issues and performed Root Cause Analysis (RCA) for critical incidents.",
        "Monitored application performance and infrastructure health using Datadog.",
        "Supported application deployments, patching, upgrades, and production changes.",
        "Worked with technical teams to investigate application and infrastructure issues.",
        "Assisted with security fixes, application maintenance, and production environment stability.",
        "Coordinated with stakeholders to ensure timely resolution of production incidents.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section-light">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-subtitle">
            PROFESSIONAL JOURNEY
          </span>

          <h2 className="section-title">
            My Work
            <span className="gradient-text">
              Experience
            </span>
          </h2>

          <p className="section-description">
            6.5+ years of experience working with cloud infrastructure,
            DevOps automation, Java applications, CI/CD pipelines,
            and enterprise production environments.
          </p>

        </div>


        {/* Experience Timeline */}
        <div className="timeline">

          {experiences.map((experience, index) => (
            <div
              className="timeline-item"
              key={index}
            >

              {/* Timeline Dot */}
              <div className="timeline-dot"></div>


              {/* Experience Card */}
              <div className="experience-card">

                <div className="experience-header">

                  <div>

                    <h3 className="experience-role">
                      {experience.role}
                    </h3>

                    <div className="experience-company">
                      <BriefcaseBusiness
                        size={15}
                        style={{
                          verticalAlign: "middle",
                          marginRight: "5px",
                        }}
                      />

                      {experience.company}
                    </div>

                  </div>


                  <div className="experience-date">
                    <CalendarDays
                      size={13}
                      style={{
                        verticalAlign: "middle",
                        marginRight: "5px",
                      }}
                    />

                    {experience.date}
                  </div>

                </div>


                {/* Location */}
                <div className="experience-location">

                  <MapPin
                    size={14}
                    style={{
                      verticalAlign: "middle",
                      marginRight: "5px",
                    }}
                  />

                  {experience.location}

                </div>


                {/* Responsibilities */}
                <ul className="experience-list">

                  {experience.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <li key={responsibilityIndex}>
                        {responsibility}
                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
