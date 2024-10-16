import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <h1>
      <Typewriter
        options={{
          strings: "We are dedicated to your wellness journey.",
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 40,
        }}
      />
    </h1>
  );
}

export default Type;
