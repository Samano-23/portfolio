import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Menu from "../components/Menu";
/* import Footer from "../components/Footer"; */

const Home = () => {
  const textRef = useRef(null); // Ref per selezionare l'elemento con l'ID "job"
  const typingIntervalRef = useRef(null); // Ref per tenere traccia dell'intervallo di digitazione
  const [projectData, setProjectData] = useState(null); // Stato per memorizzare i dati del JSON

  useEffect(() => {
    // Funzione per caricare i dati dal file JSON
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/projects-main.json"); // Path relativo al file JSON nella cartella public
        if (!response.ok) {
          throw new Error("Errore nel caricamento del file JSON");
        }
        const data = await response.json();
        setProjectData(data); // Salva i dati nello stato
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };

    fetchProjectData();

    const typeText = (content, callback) => {
      if (!textRef.current) return; // Controlla se textRef è presente
      textRef.current.textContent = ""; // Cancella il testo esistente
      let index = 0;
      const typingSpeed = 100; // Velocità di digitazione in millisecondi

      // Cancella qualsiasi intervallo esistente prima di iniziarne uno nuovo
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }

      typingIntervalRef.current = setInterval(() => {
        if (textRef.current) {
          textRef.current.textContent += content[index];
          index++;
        }

        // Verifica se tutte le lettere sono state digitate
        if (index === content.length) {
          clearInterval(typingIntervalRef.current); // Cancella l'intervallo quando la digitazione è completa

          // Aspetta un momento prima di chiamare il callback
          setTimeout(() => {
            if (callback) callback();
          }, 2000); // Aggiusta questo ritardo se necessario per mostrare il testo prima di cambiare
        }
      }, typingSpeed);
    };

    const Load = () => {
      typeText("Marketing & digital specialist", () => {
        typeText("Project management", () => {
          typeText("Data Analysis", () => {
            typeText("Frontend developer", () => {
              typeText("Business development", () => {
                setTimeout(Load, 2000); // Aggiungi un ritardo prima di riavviare il ciclo
              });
            });
          });
        });
      });
    };

    Load(); // Avvia il ciclo quando il componente viene montato

    // Cancella l'intervallo quando il componente viene smontato per evitare memory leak
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Menu /> {/* Inserisci qui il componente Menu */}
      <section className="home-content">
        <div className="home-text">
          <span className="name">Mattia Giulietti</span>
          <span id="job" ref={textRef}>
            Marketing & digital specialist
          </span>
        </div>
        <div className="home-img"></div>
      </section>
      <div className="section-title">Progetti principali</div>
      {/* Renderizza il contenuto del JSON se esiste */}
      {projectData ? (
        <div className="project-list">
          <div className="project-slider">
            {/* Itera sui progetti due volte per un effetto continuo */}
            {projectData.concat(projectData).map((project, index) => (
              <a key={index} className="project-card" href={project.url}>
                <div>
                  <img
                    className="project-img"
                    alt=""
                    src={project.img}
                    style={{ width: "300px", height: "auto" }}
                  />
                </div>
                <div className="project-data">
                  <span className="project-type">{project.type}</span>
                  <span className="project-title">{project.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p>Caricamento progetti...</p>
      )}
      <div className="home-container about">
        <span> About me </span>
        <span>
          Sono un professionista con una formazione in economia e una grande
          passione per il digitale. Dopo la laurea magistrale, ho approfondito
          le mie competenze con master in marketing, data analysis e sviluppo
          web. Dal 2019 lavoro in Amahorse Trading SRL, dove gestisco i canali
          ecommerce, analizzo dati aziendali e supporto lo sviluppo strategico
          dei brand aziendali. Lo sport è sempre stato centrale nella mia vita:
          ho praticato enduro a livello semi-professionistico, portandolo avanti
          anche durante gli studi. È da lì che ho imparato a lavorare con
          determinazione e a non mollare mai, qualità che oggi applico anche al
          mio lavoro
        </span>
      </div>
      <div className="home-container">
        <div className="contact-home-text">
          Hai qualcosa in mente? <br></br>{" "}
          <span style={{ fontWeight: "bold" }}> Scrivimi</span>
        </div>
        <div className="contact-home-contact">
          <a className="mailto" href="mailto:mattia.giulietti@gmail.com">
            <span className="mask">
              <div className="link-container">
                <span className="link-title1 title">
                  mattia.giulietti@gmail.com
                </span>
                <span className="link-title2 title">
                  mattia.giulietti@gmail.com
                </span>
              </div>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/mattia-giulietti/">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+393392108680">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/samanino/">
            <FaInstagram />
          </a>
        </div>
      </div>
      {/*       <Footer /> */}
    </div>
  );
};

export default Home;
