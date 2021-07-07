// PACKAGES IMPORT //
import React from "react";

// ASSETS IMPORT //
import EmojiLogo from "../assets/images/emoji-logo.png";

const Search = ({ searchResult }) => {
  return (
    <div className="header">
      <img src={EmojiLogo} alt="emoji-logo" className="emoji-logo" />
      <input
        onChange={(event) => searchResult(event)}
        placeholder="What emoji are you looking for ?"
      />
    </div>
  );
};

export default Search;
