import { useState, useEffect, useRef } from "react";
import "./info.scss";
import { FaInstagram } from "react-icons/fa";
import { trackEvent } from "../../analytics";

const Info = () => {
  const [buttonText, setButtonText] = useState("Copy my email address");
  const [age, setAge] = useState(0);
  const textRefs = useRef([]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDayThisYear = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < birthDayThisYear) age -= 1;
    return age;
  };

  useEffect(() => {
    const birthDate = new Date(2002, 5, 12);
    setAge(calculateAge(birthDate));
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("victor.verheyden@outlook.com");
      setButtonText("Email copied! Can't wait to hear from you");
      setTimeout(() => {
        setButtonText("Copy my email address");
      }, 5000);
    } catch (error) {
      console.error("Failed to copy the email: ", error);
    }
  };

  return (
    <section className="info-main">
      <div className="grid-container">
        <div className="left-container">
          <div className="info-container">
            <div className="info-text">
              <p ref={(el) => (textRefs.current[0] = el)}>
                Victor Verheyden is a {age}-year-old photographer from Antwerp,
                Belgium. Ever since he was a child, Victor has been fascinated
                by the power of photography to capture fleeting moments and
                convey emotion. As he grew older, he began experimenting with
                techniques, subjects and styles. Honing his skills and
                developing his unique and evolving style. Today, Victor is a
                photographer with a passion for capturing the beauty and
                complexity of the world around him. With kindness for what is
                overlooked and a love for the poetic moments that unexpectedly
                occur in our lives.
              </p>
              <p ref={(el) => (textRefs.current[1] = el)}>
                Whether he&#39;s photographing landscapes, portraits, or still
                lifes, Victor approaches each project with a creative eye and a
                deep sense of curiosity. His dedication to his craft is evident
                in every image he creates, and he continues to push himself to
                explore new horizons and expand his artistic vision.
              </p>
            </div>
            <div className="contact-container">
              <button className="email-button" onClick={handleCopyEmail}>
                {buttonText}
              </button>
              <a
                href="https://www.instagram.com/victor_verheyden/"
                target="_blank"
                rel="noopener noreferrer"
                className="email-button"
                onClick={() => {
                  trackEvent({
                    category: "Button Click",
                    action: "Clicked Instagram Link",
                    label: "Victor's Instagram",
                  });
                }}
              >
                <FaInstagram
                  size={25}
                  style={{ color: "black", display: "flex" }}
                />
              </a>
            </div>
          </div>
          <div className="credits-container">
            <button
              className="email-button credits-text"
              onClick={() => {
                trackEvent({
                  category: "Button Click",
                  action: "Clicked Design by Victor Link",
                  label: "Victor Verheyden's Instagram",
                });
                window.location.href =
                  "https://www.instagram.com/victor_verheyden/";
              }}
            >
              Design by Victor Verheyden
            </button>
            <button
              className="email-button credits-text"
              onClick={() => {
                trackEvent({
                  category: "Button Click",
                  action: "Clicked Developed by Daye Link",
                  label: "Daye Sow's Instagram",
                });
                window.location.href = "https://www.instagram.com/daye_sow_";
              }}
            >
              Developed by Daye Sow
            </button>
          </div>
        </div>
        <div className="right-container">
          <div className="img-container">
            <img
              src="/NewInfo.jpeg"
              alt="info-picture-victor-verheyden"
              loading="lazy"
            />
          </div>
          <div className="yentl-container">
            <button>Yentl Gijbels</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
