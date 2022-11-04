import React from "react";
const Card = ({ colorName, colorCode }) => {
  return (
    <div className="card">
      <p style={{ height: 210, width: 200, backgroundColor: `${colorCode}` }}>
        {" "}
      </p>
      <p className="text">{colorCode}</p>
      <span className="span" style={{ color: `${colorCode}`, fontSize: 15 }}>
        {colorName}
      </span>
    </div>
  );
};

export default Card;
