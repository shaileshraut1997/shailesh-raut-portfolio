import {
  ArrowUpRight,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  Hotel,
  ShieldCheck,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: <ShieldCheck size={24} />,
      title: "AVIVA — Health & Life Insurance Platform",
      client: "AVIVA Insurance (UK)",
      role: "Senior DevOps & Cloud Engineer",

      description:
        "Enterprise insurance platform where I managed cloud infrastructure, CI/CD automation, AMI creation, deployment workflows, and production support for reliable application releases.",

      technologies: [
        "AWS",
        "Azure DevOps",
        "Jenkins",
        "Git",
        "Bitbucket",
        "Terraform",
        "Packer",
        "Docker",
        "Kubernetes",
        "CloudWatch",
        "Datadog",
      ],

      responsibilities: [
        "Managed CI/CD pipelines and automated deployment workflows.",
        "Automated AWS AMI creation, encryption, staging validation, and production deployment.",
        "Used Terraform for Infrastructure as Code and infrastructure automation.",
        "Troubleshot pipeline failures, infrastructure issues, and deployment incidents.",
        "Collaborated with Run and Support teams for secure and highly available environments.",
      ],
    },

    {
      number: "02",
      icon: <Cloud size={24} />,
      title: "METLIFE — Insurance Platform",
      client: "MetLife Insurance",
      role: "DevOps Engineer",

      description:
        "Enterprise insurance application platform focused on automated delivery, cloud infrastructure, containerized applications, monitoring, and production reliability across AWS and Azure environments.",

      technologies: [
        "AWS",
        "Azure",
        "Azure DevOps",
        "Jenkins",
        "Git",
        "Bitbucket",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Java",
        "Maven",
        "Bash",
        "CloudWatch",
        "Azure Monitor",
        "Datadog",
        "Loggly",
      ],

      responsibilities: [
        "Designed and maintained CI/CD pipelines using Azure DevOps, Jenkins, Git, and Bitbucket.",
        "Provisioned AWS and Azure infrastructure using Terraform and IaC practices.",
        "Deployed and managed containerized Java applications using Docker and Kubernetes.",
        "Managed AWS services including EC2, IAM, VPC, S3, Auto Scaling, ELB, and CloudWatch.",
        "Managed Azure services including Virtual Machines, Virtual Network, Storage, Key Vault, Monitor, and Load Balancer.",
        "Monitored application and infrastructure performance using CloudWatch, Azure Monitor, Datadog, and Loggly.",
      ],
    },

    {
      number: "03",
      icon: <Hotel size={24} />,
      title: "SMR Technologies — AI Email Automation",
      client: "Freelance Project",
      role: "Website Developer & Cloud Automation Engineer",

      description:
        "Business automation solution developed for hotel operations, combining website integration with AI-powered email workflows to automate booking inquiries and customer communication.",

      technologies: [
        "Hostinger Horizons",
        "n8n",
        "AI Automation",
        "Email Workflows",
        "Website Integration",
        "Workflow Automation",
      ],

      responsibilities: [
        "Designed and developed a complete hotel website.",
        "Built AI-powered email automation workflows using n8n.",
        "Integrated website forms with automated email processing.",
        "Created trigger-based workflows for booking inquiries and customer responses.",
        "Automated customer communication to reduce manual effort and improve response time.",
        "Delivered an end-to-end website and business workflow automation solution.",
      ],

      link: "https://www.smrtechnologies.in",
    },
  ];

  return (
    <section id="projects" className="section section-gray">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-subtitle">
            PROJECT EXPERIENCE
          </span>

          <h2 className="section-title">
            Enterprise &amp;
            <span className="gradient-text">
              Real-World Projects
            </span>
          </h2>

          <p className="section-description">
            Selected projects covering enterprise DevOps, cloud
            infrastructure, CI/CD automation, Java applications,
            and business automation solutions.
          </p>

        </div>


        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={index}
            >

              {/* Project Number */}
              <div className="project-number">
                PROJECT {project.number}
              </div>


              {/* Project Icon */}
              <div className="skill-icon">
                {project.icon}
              </div>


              {/* Title */}
              <h3>
                {project.title}
              </h3>


              {/* Client / Role */}
              <div
                style={{
                  marginBottom: "15px",
                  color: "var(--primary)",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                {project.client}
              </div>

              <div
                style={{
                  marginBottom: "18px",
                  color: "var(--text-light)",
                  fontSize: "13px",
                }}
              >
                {project.role}
              </div>


              {/* Description */}
              <p>
                {project.description}
              </p>


              {/* Technologies */}
              <div className="project-tags">

                {project.technologies.map(
                  (technology, technologyIndex) => (
                    <span
                      className="project-tag"
                      key={technologyIndex}
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>


              {/* Responsibilities */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                  marginBottom: "22px",
                }}
              >

                {project.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <li
                      key={responsibilityIndex}
                      style={{
                        position: "relative",
                        paddingLeft: "18px",
                        color: "var(--text-light)",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--primary)",
                          fontWeight: "800",
                        }}
                      >
                        ▹
                      </span>

                      {responsibility}
                    </li>
                  )
                )}

              </ul>


              {/* Project Link */}
              {project.link && (
                <div className="project-links">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit Website
                    <ExternalLink size={15} />
                  </a>

                  <ArrowUpRight size={16} />

                </div>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
