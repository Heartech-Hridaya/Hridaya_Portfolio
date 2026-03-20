import Marquee from "react-fast-marquee";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./styles/Certificates.css";

const certs = [
  { name: "Software Fellowship", file: "/certificates/SoftwareFellowship.png", type: "image", category: "General" },
  { name: "Code for Nepal", file: "/certificates/contragulations code for nepal.png", type: "image", category: "General" },
  { name: "AI & Its Applications", file: "/certificates/AI AND ITS APPLICATIONScertificate-KMC-SEEP-AI-1462.pdf", type: "pdf", category: "AI & ML" },
  { name: "Intermediate Python", file: "/certificates/Intermediate Python.pdf", type: "pdf", category: "Programming" },
  { name: "Python 1", file: "/certificates/python1.pdf", type: "pdf", category: "Programming" },
  { name: "Supervised Machine Learning", file: "/certificates/Supervised Machine Learning .pdf", type: "pdf", category: "AI & ML" },
  { name: "Introduction to SQL", file: "/certificates/DataAnalytics/Introduction_To_SQL.pdf", type: "pdf", category: "Data Analytics" },
  { name: "Data Literacy Professional", file: "/certificates/Data Literacy Professional/Data Literacy Professional.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Case Study: Remote Working", file: "/certificates/Data Literacy Professional/Data Literacy Case Study: Remote Working Analysis.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Data Storytelling Concepts", file: "/certificates/Data Literacy Professional/Data Storytelling Concepts.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Forming Analytical Questions", file: "/certificates/Data Literacy Professional/Forming Analytical Questions.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data Culture", file: "/certificates/Data Literacy Professional/Introduction to Data Culture.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data Literacy", file: "/certificates/Data Literacy Professional/Introduction to Data Literacy.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Data", file: "/certificates/Data Literacy Professional/Introduction to Data.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Introduction to Statistics", file: "/certificates/Data Literacy Professional/Introduction to Statistics.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Communicating Data Insights", file: "/certificates/Data Literacy Professional/communicating_data_insights.pdf", type: "pdf", category: "Data Literacy" },
  { name: "Data Types & Exceptions (Java)", file: "/certificates/java/Data Types and Exceptions in Java.pdf", type: "pdf", category: "Java" },
  { name: "I/O and Streams in Java", file: "/certificates/java/InputOutputandStreamsinJav.pdf", type: "pdf", category: "Java" },
  { name: "Intro to OOP (Java)", file: "/certificates/java/Introduction to Object-Oriented.pdf", type: "pdf", category: "Java" },
  { name: "Java Fundamentals", file: "/certificates/java/Java Fundamentals.pdf", type: "pdf", category: "Java" },
  { name: "Intermediate Java", file: "/certificates/java/intermidieate_java.pdf", type: "pdf", category: "Java" },
  { name: "Intro to Java", file: "/certificates/java/intro-to-java.pdf", type: "pdf", category: "Java" },
];

// Color mapping per category
const categoryColors: Record<string, string> = {
  "General": "#5eead4",
  "AI & ML": "#a78bfa",
  "Programming": "#f59e0b",
  "Data Analytics": "#34d399",
  "Data Literacy": "#60a5fa",
  "Java": "#f87171",
};

const CertCard = ({ cert }: { cert: typeof certs[0] }) => {
  const accent = categoryColors[cert.category] || "#5eead4";
  return (
    <a
      href={cert.file}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      style={{ "--cert-accent": accent } as React.CSSProperties}
    >
      <div className="cert-card-icon">
        <FaAward size={22} />
      </div>
      <div className="cert-card-body">
        <span className="cert-card-category">{cert.category}</span>
        <h4 className="cert-card-name">{cert.name}</h4>
        <p className="cert-card-link">
          View {cert.type === "pdf" ? "Document" : "Certificate"} <FaExternalLinkAlt size={10} />
        </p>
      </div>
      <div className="cert-card-glow" />
    </a>
  );
};

// Split into two rows
const row1 = certs.slice(0, Math.ceil(certs.length / 2));
const row2 = certs.slice(Math.ceil(certs.length / 2));

const Certificates = () => {
  return (
    <div className="cert-section section-container" id="certificates">
      {/* Header */}
      <div className="cert-header">
        <p className="cert-eyebrow">Achievements</p>
        <h2 className="cert-title">My <span>Certificates</span></h2>
        <p className="cert-subtitle">
          {certs.length} certifications across AI, Data, Java &amp; more
        </p>
      </div>

      {/* Infinite marquee rows */}
      <div className="cert-marquee-wrap">
        <Marquee speed={38} gradient={true} gradientColor="#050810" gradientWidth={80} pauseOnHover>
          <div className="cert-marquee-row">
            {row1.map((c, i) => <CertCard key={i} cert={c} />)}
          </div>
        </Marquee>

        <Marquee speed={30} direction="right" gradient={true} gradientColor="#050810" gradientWidth={80} pauseOnHover>
          <div className="cert-marquee-row">
            {row2.map((c, i) => <CertCard key={i} cert={c} />)}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Certificates;
