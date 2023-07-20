import React from "react";

import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";

// import data from "../../data.json";

export default function Main({ beastData, handleModal }) {
  return (
    <main>
      {beastData.map((beast, key) => {
        return (
          <HornedBeast
            key={beast._id}
            beastObject={beast}
            title={beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
}
