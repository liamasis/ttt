// @ts-nocheck
import React from "react";
// @ts-ignore
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [moves, setMoves] = useState([]);
  const players = [
    { name: "liam", symbol: "x" },
    { name: "gabbi", symbol: "y" },
  ];
  const [player, setPlayer] = useState(players[0]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (moves.length < 3) return;
    const currentPlayer = moves[moves.length - 1].player;
    const playerMoves = moves.filter((move) => {
      return move.player.name === currentPlayer.name;
    });
    console.log(playerWon(playerMoves));
    if (playerWon(playerMoves)) {
      console.log("bazinga");
      setWinner(currentPlayer);
    }
  }, [moves]);

  function Tiles({ coord, index }) {
    const matchingCoord = moves.find((move) => {
      return move.coord.join() === coord.join();
    });

    const text = matchingCoord ? matchingCoord.player.symbol : "";

    return (
      <div key={index} onClick={() => addMove(coord)} className="tiles">
        {text}
      </div>
    );
  }

  function playerWon(filteredMoves) {
    const xValues = {};
    const yValues = {};

    filteredMoves.forEach((move) => {
      console.log(move);
      // move.cord[0] is the x value of the move
      if (xValues[move.coord[0]]) {
        xValues[move.coord[0]]++;
      } else {
        xValues[move.coord[0]] = 1;
      }
      /* xValues[move.coord[0]] = xValues[move[0]]
        ? xValues[move.coord[0]] + 1
        : 1; */
      yValues[move.coord[1]] = yValues[move[1]]
        ? yValues[move.coord[1]] + 1
        : 1;
    });
    console.log(xValues);

    Object.values(xValues).forEach((val) => console.log(val));

    if (Object.values(xValues).find((val) => val === 3)) return true;
    if (Object.values(yValues).find((val) => val === 3)) return true;

    return false;
  }

  function addMove(coord) {
    const newMoves = [...moves];
    newMoves.push({ player, coord });
    setMoves(newMoves);
    setPlayer(player.name === players[0].name ? players[1] : players[0]);
  }

  if (winner) {
    return <h1> WINNER: {winner.player.name}</h1>;
  }

  return (
    <div className="App">
      <div className="tileRow">
        {/* This is a row of tiles */}
        {[
          [1, 1],
          [2, 1],
          [3, 1],
        ].map((coord, index) => {
          return (
            <Tiles key={index} coord={coord}>
              {coord}
            </Tiles>
          );
        })}
      </div>
      <div className="tileRow">
        {/* This is a row of tiles */}
        {[
          [1, 2],
          [2, 2],
          [3, 2],
        ].map((coord, index) => {
          return (
            <Tiles key={index + 3} coord={coord}>
              {coord}
            </Tiles>
          );
        })}
      </div>
      <div className="tileRow">
        {/* This is a row of tiles */}
        {[
          [1, 3],
          [2, 3],
          [3, 3],
        ].map((coord, index) => {
          // @ts-ignore
          return (
            <Tiles key={index} coord={coord}>
              {coord}
            </Tiles>
          );
        })}
      </div>
      <div>
        <h1>Current Player: </h1>
        <p>{player.name}</p>
      </div>
    </div>
  );
}

export default App;
