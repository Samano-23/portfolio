import React, { useEffect, useState } from "react";
import "../index.css";
import "../style-progetti.css";
import Menu from "./Menu"; // Corretto
import Breadcrumb from "./Breadcrumb";

const Progetti = () => {
  const [projectData, setProjectData] = useState(null); // Stato per memorizzare i dati del JSON
  const [selectedFilter, setSelectedFilter] = useState("Tutti"); // Stato per il filtro selezionato

  useEffect(() => {
    // Funzione per caricare i dati dal file JSON
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/projects-total.json"); // Path relativo al file JSON nella cartella public
        if (!response.ok) {
          throw new Error("Errore nel caricamento del file JSON");
        }
        const data = await response.json();
        setProjectData(data); // Salva i dati nello stato
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };

    fetchProjectData(); // Chiamata alla funzione per caricare i dati
  }, []); // Aggiungi un array vuoto come secondo argomento per eseguire l'effetto solo una volta

  // Funzione per gestire il click sui filtri
  const handleFilterClick = (type) => {
    setSelectedFilter(type);
  };

  // Filtra i progetti in base al filtro selezionato
  const filteredProjects =
    selectedFilter === "Tutti"
      ? projectData
      : projectData?.filter((project) => project.type === selectedFilter);

  return (
    <div>
      <Menu /> {/* Inserisci qui il componente Menu */}
      <Breadcrumb />
      <section className="project-content">
        <p className="project-paragraph">
          Dai concept creativi ai risultati finali.
          <br></br>
          <span style={{ fontWeight: "bold" }}>
            Ogni progetto è una tappa del mio percorso di crescita.
          </span>
        </p>
        <div className="pp-filter-container">
          {projectData ? (
            <>
              <div
                className={`pp-filter ${
                  selectedFilter === "Tutti" ? "active" : ""
                }`}
                onClick={() => handleFilterClick("Tutti")}
              >
                Tutti
              </div>
              {[...new Set(projectData.map((project) => project.type))].map(
                (type, index) => (
                  <div
                    key={index}
                    className={`pp-filter ${
                      selectedFilter === type ? "active" : ""
                    }`}
                    onClick={() => handleFilterClick(type)}
                  >
                    {type}
                  </div>
                )
              )}
            </>
          ) : (
            <p>Caricamento filtri...</p>
          )}
        </div>
        {/* Renderizza il contenuto del JSON se esiste */}
        <div className="pp-card-container">
          {filteredProjects ? (
            filteredProjects.map((project, index) => (
              <div key={index} className="pp-project-card">
                {project.video ? (
                  <video
                    src={project.video}
                    alt={project.title}
                    className="pp-project-video"
                    muted // Imposta il video su muto
                    loop
                    autoPlay
                  />
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="pp-project-img"
                  />
                )}
                <div className="pp-project-info">
                  <p className="project-type pp">{project.type}</p>
                  <h3 className="project-title pp">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Caricamento progetti...</p>
          )}
        </div>
        <div>Test</div>
      </section>
    </div>
  );
};

export default Progetti;
