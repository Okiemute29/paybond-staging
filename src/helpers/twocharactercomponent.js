import React from "react";

const TwoCharacterComponent = ({ data }) => {
  const twoCharacters = `${data}`
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return <>{twoCharacters}</>;
};

export default TwoCharacterComponent;
