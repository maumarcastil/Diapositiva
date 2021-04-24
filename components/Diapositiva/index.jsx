import React, { useState, useRef, useEffect } from "react";
import { dataDiapositiva } from "data/info";

const Diapositiva = () => {
  const [numero, setNumero] = useState(0);

  const reset = useRef();
  const prev = useRef();
  const next = useRef();

  useEffect(() => {
    if (numero <= 0) {
      reset.current.className += " disabled";
      prev.current.className += " disabled";
    } else {
      reset.current.className = "btn btn-success p-2 mx-2";
      prev.current.className = "btn btn-success p-2 mx-2";
    }

    if (numero === dataDiapositiva.length - 1) {
      next.current.className += " disabled";
    } else {
      next.current.className = "btn btn-success p-2 mx-2";
    }
  }, [numero]);

  return (
    <>
      <div className="col d-flex justify-content-center pt-5">
        <button
          type="button"
          className="btn btn-success p-2 mx-2"
          ref={reset}
          onClick={() => setNumero(0)}
        >
          Restart
        </button>
        <button
          type="button"
          className="btn btn-success p-2 mx-2"
          ref={prev}
          onClick={() => setNumero(numero - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-success p-2 mx-2"
          ref={next}
          onClick={() => setNumero(numero + 1)}
        >
          Next
        </button>
      </div>
      <br />

      <div className="card shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <div className="card-title text-center p-2">
            <h3>{dataDiapositiva[numero].title}</h3>
          </div>
          <p className="card-text text-center pb-5">
            {dataDiapositiva[numero].text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Diapositiva;
