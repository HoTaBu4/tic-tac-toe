import { useEffect, useState } from 'react'

const Board = ({reset,setReset,winner,setWinner}) => {
    const [turn,setTurn] = useState(false)
    const [board,setBoard] = useState(['','','',
                                      '','','',
                                      '','',''])
    let elems = document.getElementsByClassName('cell')
    const sign = turn ? 'x' : 'o'
  
    const Draw = (cell,e) =>  {
        
        if (e.target.className.includes('cell')) {
            //checking the cell
            if (e.target.className.match(/[xo]/g) === null){ 
                //adding a sign to the cell and to the useState
                elems[Number(cell) -1].classList.add(sign)
                setTurn((prev) => !prev) 
                board[cell - 1] = sign 
            }
        }
    }
    //reseting the board
    useEffect(() =>{
               setBoard(['','','','','','','','',''])
               setWinner('')
               setReset(false)
               for (const elem of elems) {
                    elem.classList.remove('o')
                    elem.classList.remove('x')
               }
    },[reset,setReset,setWinner])
    useEffect(() =>{
        //ckeck the board for the winner
        const checkCol = () =>{
                for(let i = 0;i < 3;i++){
                    if(board[i] == board[i+3] 
                        && board[i] == board[i+6]
                        && board[i] != ''){
                            setWinner(() => turn ? 'o' : 'x') 
                        }
                }
        }
        const checkRow = () =>{

            for(let i = 1;i < 9; i+=3){
                if (board[i] == board[i - 1] 
                    && board[i] == board[i + 1] 
                    && board[i] != '') {
                        setWinner(() => turn ? 'o' : 'x')
                }   
            }

        }
        const checkDiagonal = () =>{
            if (board[4] != '') {
                if(board[0] == board[4] && board[4] == board[8] ||
                    board[2] == board[4] && board[4] == board[6]){
                        setWinner(() => turn ? 'o' : 'x') 
                }
            }

        }
        const checkwin = () =>{
            checkCol()
            checkRow()
            checkDiagonal()
        }
        checkwin()
    },[sign])
    
    return(
        <div className='board'>
           <div className='cell' onClick={(e) => Draw(1,e)}></div>
           <div className='cell' onClick={(e) => Draw(2,e)}></div>
           <div className='cell' onClick={(e) => Draw(3,e)}></div>
           <div className='cell' onClick={(e) => Draw(4,e)}></div>
           <div className='cell' onClick={(e) => Draw(5,e)}></div>
           <div className='cell' onClick={(e) => Draw(6,e)}></div>
           <div className='cell' onClick={(e) => Draw(7,e)}></div>
           <div className='cell' onClick={(e) => Draw(8,e)}></div>
           <div className='cell' onClick={(e) => Draw(9,e)}></div>
        </div>
    )
}
export default Board