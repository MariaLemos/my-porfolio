import React, { useEffect, useState } from "react";

const TyperWritter: React.FC<{
  text: string;
}> = ({ text }) => {
  const [actualText, setActualText] = useState("");

  useEffect(() => {
    const arrayText = text.split("");
    arrayText.forEach((letra, index) => {
      var timeoutId = setTimeout(() => {
        setActualText(`${text.substring(0, index)}${letra}`);
        clearTimeout(timeoutId);
      }, 50 * index);
    });
  }, [text]);

  return <>{actualText}</>;
};

export default TyperWritter;
