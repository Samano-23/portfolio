import React, { useEffect } from "react";

import "../style-formazione.css";
import "../index.css";
import Menu from "../components/Menu";

import Breadcrumb from "./Breadcrumb";

const Formazione = () => {
  useEffect(() => {
    // Cambiamento dell'id per ogni elemento con un ritardo progressivo
    const elements = [
      { selector: "#hidden-element-1", delay: 500 },
      { selector: "#hidden-element-2", delay: 700 },
      { selector: "#hidden-element-3", delay: 900 },
      { selector: "#hidden-element-4", delay: 1100 },
      { selector: "#hidden-element-5", delay: 1300 },
      { selector: "#hidden-element-6", delay: 1500 },
    ];

    elements.forEach((element) => {
      setTimeout(() => {
        const hiddenElem = document.querySelector(element.selector);
        if (hiddenElem) {
          hiddenElem.id = "visible";
        }
      }, element.delay);
    });
  }, []); // L'array vuoto come secondo argomento indica che l'effetto viene eseguito solo al montaggio del componente

  return (
    <div>
      <Menu />
      <Breadcrumb />
      <section id="page-content-formazione">
        <div id="timeline">
          <div id="hidden-element-1" className="timeline-element">
            <div id="element-content" className="right">
              <div id="ec-title">
                Corso part time
                <br />
                Web developer full stack
              </div>
              <div id="ec-subtitle">Digitazon tech school</div>
              <div id="ec-desc" style={{ fontStyle: "italic" }}></div>
              <div id="ec-vote"></div>
            </div>
            <div id="element-period">
              <span id="ep-title">Anno</span>
              <span id="ep-year">
                <span id="ep-month">Mag.</span>2023 -{" "}
                <span id="ep-month">Mag.</span>2024
              </span>
            </div>
          </div>

          <div id="hidden-element-2" className="timeline-element">
            <div id="element-period">
              <span id="ep-title">Anno</span>
              <span id="ep-year">
                <span id="ep-month">Feb.</span>2021 -{" "}
                <span id="ep-month">Apr.</span>2021
              </span>
            </div>
            <div id="element-content" className="left">
              <div id="ec-title">
                Master part time <br /> Business data analysis
              </div>
              <div id="ec-subtitle">Talent Garden</div>
              <div id="ec-desc" style={{ fontStyle: "italic" }}></div>
              <div id="ec-vote"></div>
            </div>
          </div>

          <div id="hidden-element-3" className="timeline-element">
            <div id="element-content" className="right">
              <div id="ec-title">
                Master
                <br />
                Marketing comunicazione <br /> & digital strategy
              </div>
              <div id="ec-subtitle">24 Ore Business School</div>
              <div id="ec-desc" style={{ fontStyle: "italic" }}></div>
              <div id="ec-vote"></div>
            </div>
            <div id="element-period">
              <span id="ep-title">Anno</span>
              <span id="ep-year">
                <span id="ep-month">Giu.</span>2018 -{" "}
                <span id="ep-month">Feb.</span>2019
              </span>
            </div>
          </div>

          <div id="hidden-element-4" className="timeline-element">
            <div id="element-period">
              <span id="ep-title">Anno accademico</span>
              <span id="ep-year">
                <span id="ep-month">Feb.</span>2016 -{" "}
                <span id="ep-month">Ott.</span>2017
              </span>
            </div>
            <div id="element-content" className="left">
              <div id="ec-title">
                Laurea magistrale <br /> Economia e Management
              </div>
              <div id="ec-subtitle">Università degli studi di Perugia</div>
              <div id="ec-desc" style={{ fontStyle: "italic" }}>
                Tesi: Cause related marketing: il ruolo delle attitudini
                personali nel consumo di prodotti locali nel periodo del
                post-terremoto.
              </div>
              <div id="ec-vote">110 con lode/110</div>
            </div>
          </div>

          <div id="hidden-element-5" className="timeline-element">
            <div id="element-content" className="right">
              <div id="ec-title">
                Laurea triennale <br /> Economia Aziendale
              </div>
              <div id="ec-subtitle">Università degli studi di Perugia</div>
              <div id="ec-desc" style={{ fontStyle: "italic" }}>
                Tesi: L'Outsourcing come modello <br /> di strategia
                competitiva: il caso FIAT
              </div>
              <div id="ec-vote">98/110</div>
            </div>
            <div id="element-period">
              <span id="ep-title">Anno accademico</span>
              <span id="ep-year">
                <span id="ep-month">Ott.</span>2011 -{" "}
                <span id="ep-month">Feb.</span>2016
              </span>
            </div>
          </div>

          <div id="hidden-element-6" className="timeline-element">
            <div id="element-period">
              <span id="ep-title">Anno accademico</span>
              <span id="ep-year">2010 - 2011</span>
            </div>
            <div id="element-content" className="left">
              <div id="ec-title">Diploma di maturità scientifica</div>
              <div id="ec-subtitle">
                Liceo scientifico tecnologico Leopoldo e Alice Franchetti <br />{" "}
                Città di Castello (PG)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formazione;
