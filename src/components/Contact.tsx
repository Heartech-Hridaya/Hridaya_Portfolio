import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-left">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:hridayamdr2007@gmail.com" data-cursor="disable">
                  hridayamdr2007@gmail.com
                </a>
              </p>
              <h4>Education</h4>
              <p>BIT(Hons)</p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a href="https://github.com/Heartech-Hridaya" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                Github <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box" style={{ marginTop: '20px' }}>
              <h2>
                Designed and Developed <br /> by <span>Hridaya Manandhar</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
          
          <div className="contact-right">
            <form action="https://formsubmit.co/hridayamdr2007@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
              <input type="text" name="name" placeholder="Your Name" required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
              <input type="email" name="email" placeholder="Your Email" required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
              <input type="text" name="_subject" placeholder="Subject" required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px', outline: 'none' }} />
              <textarea name="message" placeholder="Your Message" rows={5} required style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '16px', outline: 'none', resize: 'vertical' }}></textarea>
              <button type="submit" data-cursor="disable" style={{ background: 'var(--accentColor)', color: '#0a0e17', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
