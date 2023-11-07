import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import Board from "./components/Board";

const App = () => {
  //state for resetting of game
  const [reset, setReset] = useState(false);
  //state if there is already a winner
  const [isWinner, setIsWinner] = useState("");

  //will trigger if reset value change
  useEffect(() => {
    setIsWinner("");
  }, [reset]);

  return (
    <main className="w-full min-h-screen grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-center text-3xl text-black font-medium">
            Tic-Tac-Toe
          </h1>
          <img
            src="/tic-tac-toe.png"
            alt="tic-tac-toe icon"
            className="w-10 h-10"
          />
        </div>
        {/* this will only appear if there is already a winner */}
        {isWinner && (
          <div className="text-3xl font-medium flex items-center gap-3 py-5">
            <PartyPopper size={35} className="text-green-500" />
            <span>Winner: {isWinner.toUpperCase()}</span>
            <PartyPopper size={35} className="-scale-x-100 text-green-500" />
          </div>
        )}
        <Board reset={reset} setIsWinner={setIsWinner} />
        <button
          onClick={() => setReset(!reset)}
          className="w-max px-16 py-2 bg-black text-white mt-10 rounded-md
          text-xl font-medium hover:scale-105 duration-300"
        >
          Reset
        </button>
      </div>
    </main>
  );
};

export default App;
