import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Board from './components/Board/Board';
const App= ()=> {
  
  const[turn, setTurn]= useState('X')
  const[squares,setSquares]=useState(Array(9).fill(null));
  const [score,setScore]=useState({
X:0,
o:0,
    })


  return (
    <div className="container">
   <Board squares={squares}/>
    </div>
  );
}

export default App;
