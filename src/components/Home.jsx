import React from "react";
import Card from "./Card";
import Data from "./Data";

function Home() {
  return (
    <div className="home">
      <Card details={Data} />
    </div>
  );
}

export default Home;
