import Icon from "./Icon"
import './Card.css'
import Grid from "./Grid"
function Card({gameEnd,player,onPlay,index}){
    let icon =<Icon/>
    if(player=='X'){
        icon=<Icon name="cross"/>
    }else if(player=='O'){
        icon=<Icon name="circle"/>
    }
return(
  
     <div className="div" onClick={()=>!gameEnd &&player=="" && onPlay(index)}>
{icon}
    </div>
  
   
)
}
export default Card;