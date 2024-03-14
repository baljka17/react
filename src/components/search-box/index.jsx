import React from "react";
import "./style.css";

export const SearchBox = (props) => (
  <div className="search-box">
    <form>
      <input
        type="text"
        name="search-field"
        id="search-field"
        placeholder="Type search name ..."
        onChange={props.onChange}
      />
    </form>
  </div>
);
