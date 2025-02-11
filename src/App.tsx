import React, { useState } from "react";
import "./App.css"; // Make sure to import the CSS

const messages = [
  "¿Segura? 😢",
  "Andale no seas mala 🥺",
  "Piensalo bien 🤔",
  "Yanpol y Kira se van a poner tristes 💔",
  "Ya voy a llorar 😨",
  "¿SEGURISIMAAAAA? 👀",
  "Va de nuevo... 🔄",
];

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [disableNo, setDisableNo] = useState(false);
  const [showReload, setShowReload] = useState(false);

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const handleYesClick = () => {
    setDisableNo(true);
    setShowReload(true);
    setMessage("Lo sabía, soy irresistible 😎");
  };

  // Function to reload the page
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      <h1 className="neon-text">¿Quieres ser mi San Valentín?</h1>
      <div className="button-container">
        <button className="neon-button yes" onClick={handleYesClick}>Sí</button>
        <button className={`neon-button no ${disableNo ? "disabled" : ""}`} onClick={handleNoClick} disabled={disableNo}>No</button>
      </div>
      {message && <p className="message">{message}</p>}

      {/* Reload button */}
      {showReload &&
        <>
          <div className="reload-container">
            <p className="reload-message">Si te arrepientes, puedes recargar la página</p>
            <button className="neon-button reload" onClick={handleReload}>🔄</button>
          </div>
        </>
      }
    </div>
  );
};

export default App;