import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Engineering",
      institute: "J. D. College of Engineering and Management",
      university: "RTM Nagpur University (RTMNU)",
      location: "Nagpur, Maharashtra, India",
      duration: "Jun 2016 — May 2019",
    },
    {
      degree: "Diploma",
      field: "Engineering",
      institute: "Government Polytechnic Sakoli",
      university: "Maharashtra State Board of Technical Education (MSBTE)",
      location: "Bhandara, Maharashtra, India",
      duration: "Jun 2013 — May 2016",
    },
  ];

  return (
    <section id="education" className="section section-gray">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-subtitle">
            EDUCATION
          </span>

          <h2 className="section-title">
            Academic
            <span className="gradient-text">
              Background
            </span>
          </h2>

          <p className="section-description">
            My academic foundation in engineering and technology,
            which supports my professional journey in Cloud,
            DevOps, and software technologies.
          </p>

        </div>


        {/* Education Cards */}
        <div className="education-grid">

          {education.map((item, index) => (
            <div
              className="education-card"
              key={index}
            >

              {/* Icon */}
              <div className="skill-icon">
                <GraduationCap size={24} />
              </div>


              {/* Duration */}
              <div className="education-year">
                <CalendarDays
                  size={13}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "5px",
                  }}
                />

                {item.duration}
              </div>


              {/* Degree */}
              <h3>
                {item.degree}
              </h3>


              <p
                style={{
                  marginBottom: "12px",
                  color: "var(--primary)",
                  fontWeight: "700",
                }}
              >
                {item.field}
              </p>


              {/* Institute */}
              <p
                style={{
                  marginBottom: "8px",
                  color: "var(--dark)",
                  fontWeight: "600",
                }}
              >
                {item.institute}
              </p>


              {/* University */}
              <p
                style={{
                  marginBottom: "8px",
                }}
              >
                {item.university}
              </p>


              {/* Location */}
              <p>
                <MapPin
                  size={14}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "5px",
                  }}
                />

                {item.location}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
