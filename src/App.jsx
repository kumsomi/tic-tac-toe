import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isXturn, setIsXturn] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isWinner, setIsWinner] = useState(false);

  const AddValue = (index) => {
    console.log(index);
    const copyState = [...state];
    if (copyState[index] === null) {
      copyState[index] = isXturn ? "X" : "O";
      setState(copyState);
      setIsXturn((turn) => !turn);
      console.log(state[index]);
    }
  };
  const checkWinner = () => {
    //rows -> 0,1,2 | 3,4,5 | 6,7,8
    //columns -> 0,3,6 | 1,4,7 | 2,5,8
    //diagnols -> 0,4,8 | 2,4,6
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        console.log(a, "won");
        setWinner(state[a]);
        setIsWinner(true);
        return true;
      }
    }
  };
  useEffect(() => {
    checkWinner();
  }, [isXturn]);

  const resetGame = () => {
    setIsWinner(false);
    setWinner(null);
    setState(Array(9).fill(null));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <h4 className="subheading">
          Person {isXturn ? "1" : "2"}'s turn : {isXturn ? "X" : "O"}
        </h4>
        {isWinner ? (
          <div>
            <h3>Winner is {winner}</h3>
            <button className="reset-btn" onClick={resetGame}>
              Reset
            </button>
          </div>
        ) : (
          <div className="board">
            <div className="rows">
              <div className="box" onClick={() => AddValue(0)}>
                <div>{state[0]}</div>
              </div>
              <div className="box" onClick={() => AddValue(1)}>
                <div>{state[1]}</div>
              </div>
              <div className="box" onClick={() => AddValue(2)}>
                <div>{state[2]}</div>
              </div>
            </div>

            <div className="rows">
              <div className="box" onClick={() => AddValue(3)}>
                <div>{state[3]}</div>
              </div>
              <div className="box" onClick={() => AddValue(4)}>
                <div>{state[4]}</div>
              </div>
              <div className="box" onClick={() => AddValue(5)}>
                <div>{state[5]}</div>
              </div>
            </div>
            <div className="rows">
              <div className="box" onClick={() => AddValue(6)}>
                <div>{state[6]}</div>
              </div>
              <div className="box" onClick={() => AddValue(7)}>
                <div>{state[7]}</div>
              </div>
              <div className="box" onClick={() => AddValue(8)}>
                <div>{state[8]}</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
