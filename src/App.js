import { useState } from 'react';
import './App.css';
import Board from './component/board/game';
import Button from './component/button/button';
import TheWinner from './component/winner/winner';
function App() {
 const [reset, setReset] = useState(false)
 const [winner, setWinner] = useState('')
 
  const resetBoard = () =>{
    setReset(true)
  }
  return (
    <div className='App'>
        <Board reset={reset} 
            setReset={setReset} 
            winner={winner}
            setWinner={setWinner}/>
            <Button onclick={resetBoard}>reset</Button>
        {winner && <TheWinner winner={winner} reset ={reset} setReset ={resetBoard}/>}
    </div>
  );
}

export default App;
