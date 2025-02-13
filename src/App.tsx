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
  const [showNote, setShowNote] = useState(false);
  const [showSong, setShowSong] = useState(false);

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const handleYesClick = () => {
    setDisableNo(true);
    setMessage("Lo sabía, soy irresistible 😎");

    setTimeout(() => {
      setShowNote(true);
    }, 2000);

    setTimeout(() => {
      setShowSong(true);
    }, 4000);

    setTimeout(() => {
      setShowReload(true);
    }, 6000);
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

      {showNote && (
        <div className="post-it">
          <p>Te amo con toda mi alma ❤️</p>
          <p>
            Se que nosotros no necesitamos un día especial para decirnos lo importante que somos el uno para el otro,
            pero no podía pasar por alto esta fecha y que mejor que con esto
            que en primera disfrute mucho hacer porque es para tí.
          </p>
          <p>
            Yo se que seguiremos aqui por mucho tiempo más y que habra
            muchos 14's más para celebrar juntos, y este es muy especial para ambos
            porque es el primero que pasamos juntos, el primero de 192323 más.
          </p>
        </div>
      )}

      {showSong && (
        <div className= "song-container">
          <p className="message">Y por cierto... Esta canción es para ti:</p>
          <iframe
            src="https://open.spotify.com/embed/track/3knyFcZMpKeYsxaiVRjTSL?utm_source=generator&theme=0"
            width="50%"
            height="352"
            style={{ borderRadius: "20px" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
          <div className="song-info">
            <p className="song-message">
              No es una canción de amor, pero si una que habla sobre la vida adulta,
              estamos en una nueva etapa de nuestras vidas, donde hay de todo y que
              nos ha traido muchos cambios, pero nada importa porque estamos juntos,
              y esa es toda la motivación que necesitamos, te amo mi compañera de vida ❤️
            </p>
          </div>
        </div>
      )}

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