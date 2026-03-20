import { useRef, useEffect, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaGithub } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    title: "Mini-ATM-Sim v2.0",
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
    link: "https://github.com/Heartech-Hridaya/Music-Recommender-System-Using-Python",
  },
  {
    title: "Spam Mail Prediction",
    category: "Machine Learning Model",
    tools: "Python, NLP, Scikit-learn",
    image: "/images/spam.png",
    link: "https://spam-mail-prediction-by-hridaya.streamlit.app/",
  },
];

const Work = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const CARD_WIDTH = 360; // px including gap

  const scrollToIndex = (idx: number) => {
    if (!sliderRef.current) return;
    const clamped = Math.max(0, Math.min(idx, projects.length - 1));
    sliderRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
    setActiveIdx(clamped);
  };

  const scrollLeft = () => scrollToIndex(activeIdx - 1);
  const scrollRight = () => scrollToIndex(activeIdx + 1);

  // auto-advance
  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setActiveIdx((prev) => {
          const next = prev >= projects.length - 1 ? 0 : prev + 1;
          if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: next * CARD_WIDTH, behavior: "smooth" });
          }
          return next;
        });
      }, 2800);
    }
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [isPaused]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        {/* Header */}
        <div className="work-header">
          <div>
            <p className="work-eyebrow">Portfolio</p>
            <h2 className="work-title">My <span>Work</span></h2>
          </div>
          <div className="work-nav-btns">
            <button
              onClick={scrollLeft}
              className="work-nav-btn"
              disabled={activeIdx === 0}
            >
              <FaChevronLeft />
            </button>
            <span className="work-counter">{String(activeIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button
              onClick={scrollRight}
              className="work-nav-btn"
              disabled={activeIdx === projects.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="work-slider"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, index) => (
            <div
              className={`work-card ${index === activeIdx ? "work-card-active" : ""}`}
              key={index}
              onClick={() => scrollToIndex(index)}
            >
              {/* Glow */}
              <div className="work-card-glow" />

              {/* Image */}
              <div className="work-card-image">
                <WorkImage image={project.image} alt={project.title} />
                <div className="work-card-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card-repo-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={18} /> View Repo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="work-card-content">
                <div className="work-card-meta">
                  <span className="work-card-num">0{index + 1}</span>
                  <span className="work-card-category">{project.category}</span>
                </div>
                <h4 className="work-card-title">{project.title}</h4>
                <div className="work-card-tools">
                  {project.tools.split(", ").map((t) => (
                    <span key={t} className="work-card-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="work-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`work-dot ${i === activeIdx ? "work-dot-active" : ""}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
