import { SiPython, SiPandas, SiScikitlearn, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa6";

const tools = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
];

const TechStack = () => {
  return (
    <div className="section-container" id="techstack" style={{ margin: "80px auto", textAlign: "center", position: "relative", zIndex: 10 }}>
      <h2 style={{ fontSize: "clamp(30px, 5vw, 60px)", fontWeight: "500", marginBottom: "50px", textTransform: "uppercase" }}>
        Techstack (AI, ML & Web)
      </h2>
      
      <div className="tech-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "30px",
        padding: "20px"
      }}>
        {tools.map((Tool, index) => (
          <div key={index} className="tech-item" style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = Tool.color ? Tool.color : "var(--accentColor)";
            e.currentTarget.style.boxShadow = `0 10px 30px -10px ${Tool.color || 'var(--accentColor)'}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <Tool.icon size={60} color={Tool.color || "white"} style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))" }} />
            <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "1px" }}>{Tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
