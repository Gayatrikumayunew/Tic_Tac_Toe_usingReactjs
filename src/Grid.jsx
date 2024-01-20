import { useState } from "react";
import Card from "./Card";
import './Grid.css'
import iswinner from "./CheckWinner";

function Grid( {numberOfCards}){
const [board,setBoard]=useState(Array(numberOfCards).fill(""))
const [turn,setturn]=useState(true)
const [winner,setwinner]=useState(null)
function play(index){
    if(turn==true){
        board[index]='O'
    }else{
        board[index]='X'
    }
    const win =iswinner(board,turn ? 'O' : 'X')
    if(win){
setwinner(win)
    }
    setBoard([...board])
    setturn(!turn)
}
function reset(){
    setturn(true)
    setwinner(null)
    setBoard(Array(numberOfCards).fill(""))
}
return(
    < div className="grid wrapper">
        {
            winner&&(
                <>
                  <h1 className="turn">Winner is:<span className="ans"> {winner}</span></h1>
                <button className="reset" onClick={reset}>Reset game</button>
            
                </>
              )
        }
    
        
      
 <div className="grid">
        {board.map((el,idx)=> <Card gameEnd={winner ? true: false} key={idx} onPlay={play} player={el} index={idx}/>)}

    </div>
    <h1 className="turn">Current turn: {(turn)?'O':'X'} </h1>

    </div>
   )
    
}
export default Grid;