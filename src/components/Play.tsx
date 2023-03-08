import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fortawesome from '../fortawesome'

interface PlayInfo{
    url: string,
    gameUrl: string,
    width?: number,
    height?: number
    gameName: string
}

export default function Play({url, gameUrl, width = 960, height = 550, gameName}: PlayInfo) {
    const [isPlaying, SetIsPlaying] = useState(false)

    if (!isPlaying)
    {
        return (
            <button onClick={() => SetIsPlaying(!isPlaying)} style={{position:"relative", top:height/2, left:width/2}}>
              <FontAwesomeIcon icon={fortawesome.faPlay} />
            </button>
          )
    }

    return (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe frameBorder="0" src={url} allowFullScreen={true} width={width} height={height}><a href={gameUrl}>Play {gameName} on itch.io</a></iframe>
          
        
      )


  
}
