import React, { useState } from "react";
import { Medura_main } from "./Medura.styled";
import Footer from "./Footer";
import First_page from "./First_page";
import Home_middle from "./Home_middle";
import Routes_file from "./Routes_file";

// json-server --watch sprint-3/day-2/assignments/React-Dom_A/Data/db.json --port 8080

const Medura = () => {
  return (
    <>
      <Medura_main>
        <div>
          <Routes_file />

          <First_page />
        </div>

        <Home_middle />

        <Footer />
      </Medura_main>
    </>
  );
};

export default Medura;
