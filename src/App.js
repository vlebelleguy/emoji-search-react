// PACKAGES IMPORT //
import React, { useState } from "react";

// CSS IMPORT //
import "./App.css";

// COMPONENTS IMPORT //
import Footer from "./components/Footer";
import Search from "./components/Search";
import Line from "./components/Line";

// ASSETS IMPORT //
import emojiList from "./assets/emojiList.json";

const App = () => {
  const [results, setResults] = useState(emojiList.slice(0, 20));

  const searchResult = (event) => {
    let newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (
        emojiList[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length >= 20) {
          break;
        } else {
          newResults.push(emojiList[i]);
        }
      }
    }
    setResults(newResults);
  };

  return (
    <div className="container">
      <Search searchResult={searchResult} />
      {results.map((emoji, index) => {
        return <Line key={index} emoji={emoji} />;
      })}

      <Footer />
    </div>
  );
};

export default App;
