import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer & Frontend Dev</h4>
                <h5>Freelance / Self-Employed</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and developed multiple responsive user interfaces. Focused on enhancing user experience through wireframing, prototyping in Figma, and implementing pixel-perfect designs using React and Tailwind CSS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BIT(HONS)</h4>
                <h5>Mid-valley International College</h5>
              </div>
              <h3>2024 - PRESENT</h3>
            </div>
            <p>
              Undergraduate program focusing on core computing concepts, programming, and software engineering. Engaging actively in technology, developing multiple projects, and focusing on Data Analytics and AI/ML applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>+2 Science</h4>
                <h5>National Integrated College</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Completed higher secondary education with a major in Science, developing strong analytical and problem-solving skills which laid the foundation for pursuing higher studies in IT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
