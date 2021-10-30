import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  //hook useCallback pra "cachear" a função
  const inc = useCallback(
    function (delta) {
      setCount((current) => current + delta);
    },
    [setCount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <div className="center">
        <span className="text">{count}</span>
        <div>
          <UseCallbackButtons inc={inc} />
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
