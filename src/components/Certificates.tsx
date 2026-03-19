import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certs = [
  { name: "Software Fellowship", file: "/certificates/SoftwareFellowship.png", type: "image", category: "General" },
  { name: "Code for Nepal", file: "/certificates/contragulations code for nepal.png", type: "image", category: "General" },
  { name: "AI & Its Applications", file: "/certificates/AI AND ITS APPLICATIONScertificate-KMC-SEEP-AI-1462.pdf", type: "pdf", category: "AI & ML" },
  { name: "Intermediate Python", file: "/certificates/Intermediate Python.pdf", type: "pdf", category: "Programming" },
  { name: "Python 1", file: "/certificates/python1.pdf", type: "pdf", category: "Programming" },
  { name: "Supervised Machine Learning", file: "/certificates/Supervised Machine Learning .pdf", type: "pdf", category: "AI & ML" },
  { name: "Introduction to SQL", file: "/certificates/DataAnalytics/Introduction_To_SQL.pdf", type: "pdf", category: "Data Analytics" },
  
  // Data Literacy
  { name: "Data Literacy Professional", file: "/certificates/Data Literacy Professional/Data Literacy Professional.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Case Study: Remote Working Analysis", file: "/certificates/Data Literacy Professional/Data Literacy Case Study: Remote Working Analysis.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Data Storytelling Concepts", file: "/certificates/Data Literacy Professional/Data Storytelling Concepts.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Forming Analytical Questions", file: "/certificates/Data Literacy Professional/Forming Analytical Questions.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data Culture", file: "/certificates/Data Literacy Professional/Introduction to Data Culture.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data Literacy", file: "/certificates/Data Literacy Professional/Introduction to Data Literacy.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data", file: "/certificates/Data Literacy Professional/Introduction to Data.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Statistics", file: "/certificates/Data Literacy Professional/Introduction to Statistics.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Communicating Data Insights", file: "/certificates/Data Literacy Professional/communicating_data_insights.pdf", type: "pdf", category: "Data Literacy" },
  
  // Java
  { name: "Data Types & Exceptions (Java)", file: "/certificates/java/Data Types and Exceptions in Java.pdf", type: "pdf", category: "Java" },
  { name: "I/O and Streams in Java", file: "/certificates/java/InputOutputandStreamsinJav.pdf", type: "pdf", category: "Java" },
  { name: "Intro to OOP (Java)", file: "/certificates/java/Introduction to Object-Oriented.pdf", type: "pdf", category: "Java" },
  { name: "Java Fundamentals", file: "/certificates/java/Java Fundamentals.pdf", type: "pdf", category: "Java" },
  { name: "Intermediate Java", file: "/certificates/java/intermidieate_java.pdf", type: "pdf", category: "Java" },
  { name: "Intro to Java", file: "/certificates/java/intro-to-java.pdf", type: "pdf", category: "Java" },
];

const Certificates = () => {
  return (
    <div className="section-container" id="certificates" style={{ margin: "100px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 500, margin: "0 0 50px 0" }}>
        My <span>Certificates</span>
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "30px",
      }}>
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.3s, background 0.3s",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
            }}
          >
            <div style={{
              background: "rgba(94, 234, 212, 0.1)",
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accentColor)"
            }}>
              <FaAward size={24} />
            </div>
            
            <div style={{ flexGrow: 1 }}>
              <span style={{ fontSize: "12px", color: "var(--accentColor)", border: "1px solid var(--accentColor)", borderRadius: "20px", padding: "2px 8px", marginBottom: "8px", display: "inline-block", textTransform: "uppercase", letterSpacing: "1px" }}>{cert.category}</span>
              <h4 style={{ fontSize: "18px", margin: "0 0 8px 0", fontWeight: 500, lineHeight: 1.4 }}>{cert.name}</h4>
              <p style={{ margin: "10px 0 0 0", fontSize: "14px", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "6px" }}>
                View {cert.type === "pdf" ? "Document" : "Certificate"} <FaExternalLinkAlt size={12} />
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
