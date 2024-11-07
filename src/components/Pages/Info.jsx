import { useState, useEffect, useRef } from "react";
import "./info.scss";
import { FaInstagram } from "react-icons/fa";

const Info = () => {
  const [buttonText, setButtonText] = useState("Copy my email address");
  const [age, setAge] = useState(0);
  const textRefs = useRef([]); // Array to hold references to all paragraphs

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

  useEffect(() => {
    // Timeout to allow the fade-in effect
    const timer = setTimeout(() => {
      textRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("fade-in"); // Add 'fade-in' class to trigger opacity transition
        }
      });
    }, 1250); // Adjust delay if necessary

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("victorverheyden@gmail.com");
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
      <div className="first-container">
        <div className="info-text">
          <p ref={(el) => (textRefs.current[0] = el)}>
            Victor Verheyden is a {age}-year-old photographer from Antwerp,
            Belgium. Ever since he was a child, Victor has been fascinated by
            the power of photography to capture fleeting moments and convey
            emotion. As he grew older, he began experimenting with techniques,
            subjects and styles. Honing his skills and developing his unique and
            evolving style. Today, Victor is a photographer with a passion for
            capturing the beauty and complexity of the world around him. With
            kindness for what is overlooked and a love for the poetic moments
            that unexpectedly occur in our lives.
          </p>
          <p ref={(el) => (textRefs.current[1] = el)}>
            Whether he&#39;s photographing landscapes, portraits, or still
            lifes, Victor approaches each project with a creative eye and a deep
            sense of curiosity. His dedication to his craft is evident in every
            image he creates, and he continues to push himself to explore new
            horizons and expand his artistic vision.
          </p>
        </div>
        <div className="img-container">
          <img
            src="/Info.jpg"
            alt="info-picture-victor-verheyden"
            loading="lazy"
          />
        </div>
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
        >
          <FaInstagram size={25} style={{ color: "black", display: "flex" }} />
        </a>
      </div>
    </section>
  );
};

export default Info;
