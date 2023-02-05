import Button from "../button/button"
const TheWinner =({winner,reset,setReset})=>{
    return(
        <div className="winner_Table">
            <div className="winner_block">
                <h1 className="winner_title">winner is: </h1>
                <h1 className="winner">{winner}</h1>
            </div>
           <Button onclick = {() => setReset()}>reset</Button>
        </div>
    )
}
export default TheWinner