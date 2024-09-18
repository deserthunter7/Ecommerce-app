import React from "react";

const Signature = () => {
  const signatureStyle = {
    fontFamily: "'Great Vibes', cursive",
    fontSize: "15px",
    marginTop: "5px",
  };

  const redStyle = {
    color: "white",
  };

  const blueStyle = {
    color: "gray-900",
  };

  return (
    <div style={signatureStyle}>
      <span style={redStyle}>S.</span>
      <span style={blueStyle}>Roy</span>
    </div>
  );
};

export default Signature;
