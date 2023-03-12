import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/Game.scss"
interface GameImgA{
    to: string,
imgSrc: string,
GameName: string


}

export default function GameImg({to, imgSrc, GameName}: GameImgA) {
  return (
    <div className='card w-1 game' style={{maxWidth:"300px", height: "300px"}}>
      <Link to={to} className="game">
        <img src={imgSrc} alt="game" className='img' />
        <div className='game-name' style={{ minWidth:"50px"}}>{GameName}</div>
      </Link>
    </div>
  )
}
