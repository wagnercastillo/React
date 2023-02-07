import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
 
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.defaultProps = {
  subtitulo: "Mi subtitulo",
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
