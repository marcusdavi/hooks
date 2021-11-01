import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store";
import {
  numberAdd2,
  numberMult7,
  numberDiv25,
  numberAddN,
  numberParseInt,
  login,
  logout,
} from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, "Marcus")}>
            login
          </button>
          <button className="btn" onClick={() => logout(dispatch)}>
            logout
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => numberMult7(dispatch)}>
            *7
          </button>
          <button className="btn" onClick={() => numberDiv25(dispatch)}>
            /25
          </button>
          <button className="btn" onClick={() => numberParseInt(dispatch)}>
            parseInt
          </button>
          <button className="btn" onClick={() => numberAddN(dispatch, 10)}>
            +10
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
