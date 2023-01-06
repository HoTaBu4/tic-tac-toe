import Button from "./button/button"
const TheWinner =({winner,setReset})=>{
    return(
        <div className="winner_Table">
            <div className="winner_block">
                <h1 className="winner_title">winner is: </h1>
                <h1 className="winner">{winner}</h1>
            </div>
           <Button>reset</Button>
        </div>
    )
}
export default TheWinner