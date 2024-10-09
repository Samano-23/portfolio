import React from "react";
import "../index.css";
import Menu from "./Menu"; // Corretto
import Breadcrumb from "./Breadcrumb";

const Esperienze = () => {
  return (
    <div>
      <Menu /> {/* Inserisci qui il componente Menu */}
      <Breadcrumb />
    </div>
  );
};

export default Esperienze;
