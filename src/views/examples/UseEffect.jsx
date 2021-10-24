import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState("Ímpar");

  function calcFatorial(n) {
    const number = parseInt(n);
    if (number < 0) {
      return -1;
    } else if (number === 0) {
      return 1;
    } else {
      return calcFatorial(number - 1) * number;
    }
  }

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(() => {
    setStatus(number % 2 === 0 ? "Par" : "Ímpar");
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(evt) => setNumber(evt.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02 - Desafio" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
