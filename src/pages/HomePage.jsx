import React from "react";

import { Home, Benefits, Roadmap, Faq ,Team} from "../components/index.js";

function HomePage() {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <div id="benefits">
        <Benefits />
      </div>

      <div id="roadmap">
        <Roadmap />
      </div>

      <div id="faq">
        <Faq />
      </div>
      <div id="team">
        <Team />
      </div>
    </>
  );
}

export default HomePage;
