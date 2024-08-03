import React from "react";

const UnderScoreRemoval = ({ text }) => {
  const data = text.replace(/_/g, ' ')

  return <>{data}</>;
};

export default UnderScoreRemoval;
