import { useEffect, useState } from 'react'
import { bandMembers } from './data/band-members'
import { allSongs, type Song } from './data/songs'
import logoPolilla from './assets/PNG POLILLA - LOGO 01.png'
import { FaDrum, FaMicrophoneAlt, FaGuitar } from 'react-icons/fa'
import { GiPianoKeys, GiGuitarBassHead } from 'react-icons/gi'
import './styles/App.css'
import LoadingPolilla from "./components/LoadingPolilla/LoadingPolilla";
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'

const instrumentIcons: Record<string, React.ReactNode> = {
  Batería: <FaDrum size={32} color="#a18aff" title="Batería" />,
  Voz: <FaMicrophoneAlt size={32} color="#a18aff" title="Voz" />,
  Piano: <GiPianoKeys size={32} color="#a18aff" title="Piano" />,
  Bajo: <GiGuitarBassHead size={32} color="#a18aff" title="Bajo" />,
  Guitarra: <FaGuitar size={32} color="#a18aff" title="Guitarra" />,
};

function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  const openSongModal = (song: Song) => {
    setSelectedSong(song);
  };

  const closeSongModal = () => {
    setSelectedSong(null);
  };

  const getSongPreview = (lyrics: string[]) => {
    const firstLines = lyrics.slice(0, 6).filter((line) => line.trim() !== "");
    return firstLines.join("\n");
  };

  const formatLyrics = (lyrics: string[]) => {
    return lyrics.map((line, index) => {
      if (line.trim() === "") return <br key={index} />;
      // Palabras clave que deben ir en amarillo SOLO si la línea es exactamente igual, o igual + número, o igual + FINAL
      // Mover a otro archivo
      const sectionWords = [
        "ESTROFA",
        "ESTRIBILLO",
        "SOLO",
        "PUENTE",
        "RAP",
        "MODULA",
        "PRE-ESTRIBILLO",
        "NANANA",
      ];
      const upperLine = line.trim().toUpperCase();
      const isSection = sectionWords.some(
        (word) =>
          upperLine === word ||
          (/^([A-ZÁÉÍÓÚÜÑ]+) [0-9]+$/.test(upperLine) &&
            upperLine.startsWith(word + " ")) ||
          upperLine === word + " FINAL"
      );
      return (
        <div
          key={index}
          className={isSection ? "lyrics-section" : "lyrics-line"}
        >
          {line}
        </div>
      );
    });
  };
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

      return () => clearTimeout(timer);
    }, []);


  return (
    <>
      {loading ? (
        <LoadingPolilla loading={loading} />
      ) : (
        <div className="App">

          <Header />
        <NavBar />
   
          {/* Sección de Canciones */}
          <section className="songs-section">
            <div className="container">
              <h2 className="section-title">Canciones</h2>
                   <Button variant='primary'>el pepe </Button>
              <div className="songs-grid">
                {allSongs.map((song, index) => (
                  <div
                    key={song.title}
                    className="song-card hover-glow fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openSongModal(song)}
                  >
                    <img
                      src={logoPolilla}
                      alt="Logo Polilla"
                      className="song-card-logo"
                      style={{
                        width: "38px",
                        height: "38px",
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        opacity: 0.7,
                        pointerEvents: "none",
                      }}
                    />
                    <h3 className="song-title">{song.title}</h3>
                    <div className="song-preview">
                      {getSongPreview(song.lyrics)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separador visual entre canciones e integrantes */}
          <div style={{ height: "60px" }} />

          {/* Sección de Integrantes al final */}
          <section className="members-section">
            <div className="container members-list-uno">
              <h2 className="section-title">Integrantes</h2>
              <div className="members-grid-uno">
                {bandMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="member-card-uno fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="member-info-uno">
                      <div className="member-icon-uno">
                        {instrumentIcons[member.instrument]}
                      </div>
                      <div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                        <p className="member-instrument">{member.instrument}</p>
                      </div>
                    </div>
                    <img
                      src={logoPolilla}
                      alt="Logo Polilla"
                      className="member-logo-uno"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modal de Letra */}
          {selectedSong && (
            <div className="modal-overlay" onClick={closeSongModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3 className="modal-title">{selectedSong.title}</h3>
                  <button className="close-button" onClick={closeSongModal}>
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="lyrics-content">
                    {formatLyrics(selectedSong.lyrics)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App
