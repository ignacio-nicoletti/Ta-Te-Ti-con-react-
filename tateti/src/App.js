import './App.css';
import { useState } from 'react'
import Board from './components/Board/Board';
const App = () => {

  const [turn, setTurn] = useState('X')
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    o: 0,
  })


  const checkForWinner = newSquares => {
    setTurn(turn === 'X' ? 'o' : 'X')
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);

  }



  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick} />
    </div>
  );
}

export default App;
