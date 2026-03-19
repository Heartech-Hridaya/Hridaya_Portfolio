import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Wastelink",
    category: "Eco-friendly Web Platform",
    tools: "React, Tailwind CSS, Three.js, Python",
    image: "/images/wastelink.png",
    link: "https://github.com/Heartech-Hridaya/Wastelink_E2500021_E2500066_E2500023_E2500016",
  },
  {
    title: "Fitvisor",
    category: "Interactive Fitness Web Application",
    tools: "React, Python, MediaPipe, Socket.IO",
    image: "/images/FitVisor.png",
    link: "#",
  },
  {
    title: "Mini-ATM-Sim__v-2.0",
    category: "Simulated ATM System",
    tools: "Python, ReactJS",
    image: "/images/ATM.png",
    link: "https://github.com/Heartech-Hridaya/Mini-ATM-Sim__v-2.0",
  },
  {
    title: "Wine & Titanic Prediction",
    category: "Machine Learning Models",
    tools: "Python, Pandas, Scikit-learn",
    image: "/images/winetitaanic.png",
    link: "https://winetitanicquality-survivalpridiction-7iev3e3989ulzqjygfmdkz.streamlit.app/",
  },
  {
    title: "Mid-Valley College Website",
    category: "Dynamic Academic Platform",
    tools: "React (Vite), Tailwind CSS, R3F",
    image: "/images/midvalley.png",
    video: "/images/midvalley.webm",
    link: "https://github.com/sahilstha0007/MidValleyInt",
  },
  {
    title: "Frame It",
    category: "Creative Marketplace Platform",
    tools: "Modern Web Technologies",
    image: "/images/placeholderForFrameItProject.webp",
    link: "https://github.com/smith4545454545454556/hackathon",
  },
  {
    title: "Music Recommendation System",
    category: "Machine Learning Model",
    tools: "Python, Machine Learning, Pandas",
    image: "/images/music.png",
    link: "#",
  },
  {
    title: "Spam Mail Prediction",
    category: "Machine Learning Model",
    tools: "Python, NLP, Scikit-learn",
    image: "/images/spam.png",
    link: "#",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          width: "100%",
          paddingTop: "20px"
        }}>
          {projects.map((project, index) => (
            <div className="work-card" key={index} style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              transition: "transform 0.3s, background 0.3s"
            }}>
              <div className="work-card-image" style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)" }}>
                <WorkImage image={project.image} alt={project.title} />
              </div>

              <div className="work-card-content" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "24px", margin: 0, fontWeight: 500 }}>{project.title}</h4>
                  <span style={{ fontSize: "14px", opacity: 0.5, fontWeight: "bold" }}>0{index + 1}</span>
                </div>
                <p style={{ color: "#adacac", margin: "0 0 16px 0", fontSize: "15px" }}>{project.category}</p>

                <div style={{ marginTop: "auto" }}>
                  <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.6 }}>Tools & Features</span>
                  <p style={{ color: "#adacac", fontSize: "14px", margin: "6px 0 20px 0" }}>{project.tools}</p>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(94, 234, 212, 0.1)", color: "var(--accentColor)", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", border: "1px solid rgba(94, 234, 212, 0.2)", transition: "all 0.3s" }}>
                    View Repo <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
