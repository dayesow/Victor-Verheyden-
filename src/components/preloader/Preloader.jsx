import React, { useEffect, useState } from "react";
import "./preloader.scss"; // Zorg ervoor dat je de CSS in een apart bestand plaatst of in een styled component

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verander de timer naar de duur van je typanimatie + eventuele extra tijd
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Zorg ervoor dat dit overeenkomt met de duur van je animatie

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="typing-demo">
        <span>Victor Verheyden</span>
      </div>
    </div>
  );
};

export default Preloader;
