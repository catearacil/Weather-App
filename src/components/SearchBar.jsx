import React, { useState } from "react";
import "./SearchBar.css"


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
       <div className="Barra">

      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
       
      />
    
      <input  className="Search" type="submit" value="Search" />
      </div>
    </form>
  );
}


