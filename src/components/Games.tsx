import React from 'react'
import GameImg from "./GameImg"
import Game1 from "../img/TD.png"
import "../scss/Game.scss"
import Game2 from "../img/Insane.png"

export default function Games() {
    console.log('games')
  return (
    <div>
      <div className="row gap-2 justify-center">
      <div className="col-12-xs col-5-sm col-3-xl">
        
        <GameImg to="/Games/1" imgSrc={Game1} GameName={"Tower Defense"}></GameImg>
        
      </div>
      <div className="col-12-xs col-5-sm col-3-xl">
        
        <GameImg to="/Games/2" imgSrc={Game2} GameName={'Insane'}></GameImg>
        
      </div>
      
        
      
    </div>
    
    
    </div>
  )
}
