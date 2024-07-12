import React from "react";
import { useLocation } from "react-router-dom";

export default function UseLocationPage() {
 
    let Location=useLocation();

    return (
    <div>
      <h1>UseLocationPage</h1>
        {/* for searching */}
        <p>{Location.search}</p>
        {/* path name */}
        <p>{Location.pathname}</p>
        {/* for id or section */}
        <p>{Location.hash}</p>
    </div>
  );
}
