import React from "react";

const UseCallbackButtons = (props) => {
  //Log para informar a renderização do componente
  console.log("render...");

  return (
    <div>
      <button className="btn" onClick={() => props.inc(6)}>
        + 06
      </button>
      <button className="btn" onClick={() => props.inc(12)}>
        + 12
      </button>
      <button className="btn" onClick={() => props.inc(18)}>
        + 18
      </button>
    </div>
  );
};

//Cacheando o componente
export default React.memo(UseCallbackButtons);
