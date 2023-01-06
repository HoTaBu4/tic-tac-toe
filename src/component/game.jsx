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
                //adding a sign to the cell
                elems[Number(cell) -1].classList.add(sign)
                setTurn((prev) => !prev) 
                board[cell - 1] = sign 
            }

        }
        
    }
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
           <div className='cell' onClick={(e) => Draw(1,e)}>1</div>
           <div className='cell' onClick={(e) => Draw(2,e)}>2</div>
           <div className='cell' onClick={(e) => Draw(3,e)}>3</div>
           <div className='cell' onClick={(e) => Draw(4,e)}>4</div>
           <div className='cell' onClick={(e) => Draw(5,e)}>5</div>
           <div className='cell' onClick={(e) => Draw(6,e)}>6</div>
           <div className='cell' onClick={(e) => Draw(7,e)}>7</div>
           <div className='cell' onClick={(e) => Draw(8,e)}>8</div>
           <div className='cell' onClick={(e) => Draw(9,e)}>9</div>
    </div>
    )
}
export default Board