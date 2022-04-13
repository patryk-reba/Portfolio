import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Entrepreneur",
          "Programmer",
          "Engineer"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 20
      }}
    />
  );
}

export default Type;
