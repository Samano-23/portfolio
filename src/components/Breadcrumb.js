import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CgHomeAlt } from "react-icons/cg";

const Breadcrumb = () => {
  const location = useLocation();

  // Definisci una mappatura per il breadcrumb in base alla route
  const breadcrumbMapping = {
    "/": "Home",
    "/about": "About",
    "/contatti": "Contatti",
    "/formazione": "Formazione",
    "/esperienze": "Esperienze",
    "/progetti": "Progetti",
    // Aggiungi altre pagine qui se necessario
  };

  // Ottieni il percorso attuale
  const currentPath = location.pathname;

  // Imposta il titolo del breadcrumb in base alla mappatura
  const currentBreadcrumb =
    breadcrumbMapping[currentPath] || "Pagina Sconosciuta";

  useEffect(() => {
    // Aggiunta della classe 'visible' all'elemento con la classe 'hidden-span' dopo un breve ritardo
    const timer = setTimeout(() => {
      const hiddenSpan = document.querySelector("#breadcrumb-active");
      if (hiddenSpan) {
        hiddenSpan.classList.add("visible");
      }
    }, 500); // Regola il tempo di ritardo

    // Pulizia dell'effetto al cambio di pagina o smontaggio del componente
    return () => clearTimeout(timer);
  }, [currentPath]);

  return (
    <section className="breadcrumb">
      <Link to="/" className="link">
        <CgHomeAlt />
      </Link>
      <div>|</div>
      <span id="breadcrumb-active" className="hidden-span">
        {currentBreadcrumb}
      </span>
    </section>
  );
};

export default Breadcrumb;
