import {
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Monitor,
  ShieldCheck,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: <Cloud size={23} />,
      title: "AWS & Cloud",
      skills: [
        "AWS",
        "EC2",
        "IAM",
        "VPC",
        "S3",
        "ELB",
        "Auto Scaling",
        "CloudWatch",
        "RDS",
      ],
    },
    {
      icon: <GitBranch size={23} />,
      title: "CI/CD & DevOps",
      skills: [
        "Jenkins",
        "Azure DevOps",
        "Git",
        "Bitbucket",
        "CI/CD Pipelines",
        "Release Automation",
        "Maven",
        "Bash",
      ],
    },
    {
      icon: <Wrench size={23} />,
      title: "Infrastructure as Code",
      skills: [
        "Terraform",
        "Packer",
        "Infrastructure Automation",
        "Configuration Management",
        "Golden AMI",
      ],
    },
    {
      icon: <Container size={23} />,
      title: "Containers & Kubernetes",
      skills: [
        "Docker",
        "Kubernetes",
        "Deployments",
        "Services",
        "Containerization",
        "Application Deployment",
      ],
    },
    {
      icon: <Monitor size={23} />,
      title: "Monitoring & Logging",
      skills: [
        "Datadog",
        "AWS CloudWatch",
        "Azure Monitor",
        "Loggly",
        "Application Monitoring",
        "Infrastructure Monitoring",
      ],
    },
    {
      icon: <Code2 size={23} />,
      title: "Application & Build",
      skills: [
        "Java",
        "Maven",
        "Java Applications",
        "Build Automation",
        "Deployment Automation",
        "Production Support",
      ],
    },
    {
      icon: <ShieldCheck size={23} />,
      title: "Security & Secrets",
      skills: [
        "AWS IAM",
        "HashiCorp Vault",
        "AWS Secrets",
        "Encryption",
        "Security Fixes",
        "Access Management",
      ],
    },
    {
      icon: <Database size={23} />,
      title: "Cloud Platforms",
      skills: [
        "AWS",
        "Azure",
        "Azure Virtual Machines",
        "Azure Storage",
        "Azure Key Vault",
        "Azure Load Balancer",
      ],
    },
  ];

  return (
    <section id="skills" className="section section-gray">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-subtitle">
            TECHNICAL SKILLS
          </span>

          <h2 className="section-title">
            Technologies I
            <span className="gradient-text">
              Work With
            </span>
          </h2>

          <p className="section-description">
            A practical technology stack built through enterprise
            projects, production environments, cloud deployments,
            and continuous automation.
          </p>

        </div>


        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {category.icon}
              </div>

              <h3>
                {category.title}
              </h3>

              <div className="skill-list">

                {category.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-tag"
                    key={skillIndex}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
