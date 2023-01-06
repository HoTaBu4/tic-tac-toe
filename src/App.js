import { useState } from 'react';
import './App.css';
import Board from './component/game';
import TheWinner from './component/winner';
function App() {
 const [reset, setReset] = useState(false)
 const [winner, setWinner] = useState('')
  return (
    <div className='App'>
        <Board reset={reset} 
            setReset={setReset} 
            winner={winner}
            setWinner={setWinner}/>
        {winner && <TheWinner winner={winner} setReset ={setReset}/>}
    </div>
  );
}

export default App;
