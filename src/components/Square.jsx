import { X, Circle } from "lucide-react";

//this component is the individual square on the board
//passed to this component are 3 props which are
//move: player's move which will be either x or o
//onClick: which is will receive a function handleSquareClick from board component
//disable: a boolean props to disable the squares once there is already a winner
const Square = ({ move, onClick, turn, disable = false }) => {
  return (
    <>
      <div
        disable={disable}
        role="button"
        onClick={onClick}
        className="border-r-2 border-slate-500 last:border-0 grid place-items-center group"
      >
        {/* this will only prompt the move of the player inside of the square */}
        {move && (move === "x" ? <X size={60} /> : <Circle size={60} />)}
        {/* this will just give an hover effect to know which turn is it x or o */}
        {!move && !disable && (
          <div className="hidden group-hover:block transition duration-500">
            {turn ? <X size={60} /> : <Circle size={60} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Square;
