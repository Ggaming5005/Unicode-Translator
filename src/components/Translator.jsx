import React, { useState } from "react";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const textToUTF8 = () => {
    const utf8Hex = Array.from(inputText)
      .map((char) => char.codePointAt(0).toString(16).padStart(4, "0"))
      .join(" ");
    setOutputText(utf8Hex.toUpperCase());
  };

  const utf8ToText = () => {
    try {
      const text = inputText
        .split(" ")
        .map((hex) => String.fromCodePoint(parseInt(hex, 16)))
        .join("");
      setOutputText(text);
    } catch (error) {
      setOutputText("Invalid UTF-8 Hex input");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const clearFields = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="translator-container">
      <textarea
        placeholder="Enter text or UTF-8 Hex here..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <div className="buttons">
        <button onClick={textToUTF8}>Text to UTF-8 Hex</button>
        <button onClick={utf8ToText}>UTF-8 Hex to Text</button>
        <button onClick={clearFields}>Clear</button>
      </div>
      <textarea
        placeholder="Result will appear here..."
        value={outputText}
        readOnly
      ></textarea>
    </div>
  );
};

export default Translator;
