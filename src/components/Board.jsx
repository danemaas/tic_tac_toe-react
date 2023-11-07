import { useEffect, useState } from "react";
import { checkWinner } from "../utils/checkWinner";
import Square from "./Square";
import { toast } from "sonner";

//board component with a props of reset and setIsWinner from parent component App
const Board = ({ reset, setIsWinner }) => {
  const initialTurn = true; //initial value for the player turns
  //initial value for the board
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  //state for the board
  const [board, setBoard] = useState(initialBoard);
  //state for the player turns
  const [turn, setTurn] = useState(initialTurn);

  //will be triggered once reset value is change
  //to reset the board and turn value
  useEffect(() => {
    setBoard(initialBoard);
    setTurn(initialTurn);
  }, [reset]);

  //winner variable will receive the value return by function checkWinner
  const winner = checkWinner(board);

  //this function will handle the player moves when player clicked a square
  //function will accept 2 params which is row and col for the position of
  //the clicked square
  const handleSquareClick = (row, col) => {
    //check if the square click is an empty/available square
    //and if there is still no winner
    if (board[row][col] === "" && !winner) {
      //spread the board array and make a duplicate board
      //which will accept the move value of the player which is either x or o
      const newBoard = [...board];

      //check if the turn is for player x or player o and receive the move
      newBoard[row][col] = turn ? "x" : "o";

      //newBoard value will be received in setBoard to updated the board value
      setBoard(newBoard);
      setTurn(!turn); //change the turn for the next player's move
    } else if (board[row][col] !== "" && !winner) {
      alert("square already taken");
    }
  };

  //if there is a winner set the isWinner value by the winner value
  if (winner) {
    setIsWinner(winner);
  }

  return (
    <div
      disable={winner}
      className="w-[500px] h-[500px] bg-cyan-500 rounded-md
      border-2 border-slate-500 overflow-hidden grid grid-rows-3
      cursor-pointer"
    >
      <div className="border-b-2 border-slate-500 grid grid-cols-3">
        {/* instead of manually creating 3 square component
        I used an Array function to iterate 3x using map */}
        {[...Array(3)].map((square, index) => (
          <Square
            disable={winner}
            turn={turn}
            key={index}
            move={board[0][index]}
            onClick={() => handleSquareClick(0, index)}
          />
        ))}
      </div>
      <div className="border-b-2 border-slate-500 grid grid-cols-3">
        {[...Array(3)].map((square, index) => (
          <Square
            disable={winner}
            turn={turn}
            key={index}
            move={board[1][index]}
            onClick={() => handleSquareClick(1, index)}
          />
        ))}
      </div>
      <div className="grid grid-cols-3">
        {[...Array(3)].map((square, index) => (
          <Square
            disable={winner}
            turn={turn}
            key={index}
            move={board[2][index]}
            onClick={() => handleSquareClick(2, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
