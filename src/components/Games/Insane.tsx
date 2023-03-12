/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from 'react'
import Download, {DownloadType} from '../download'
import insane from '../../img/Insane.png'
import Play from '../Play'
import "../../bg"

//const scene = new THREE.Scene()

//const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)
//const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg")})


document.addEventListener("resize", ( ) => {
  
})





export default function Insane() {
  
  
  useEffect(() => {

    return () => {
      
    
    }
  } )
  
  
    
    
    
    return (
        <div>
            <Play url={"https://itch.io/embed-upload/7460532?color=333333"} gameUrl={"https://cats-studio.itch.io/insane-launcher"} gameName={"insane"}></Play>
            
            
            
          <h2 className='text-black'>
            tower defence
          </h2>
          
          <img src={insane} width={"200px"} height={"200px"}/><br/>
          <Download url={"https://www.googleapis.com/drive/v3/files/1uxg2Za2fgRBSx6Ra578H0HD1H_Kp_opF?alt=media&key=AIzaSyCY8ipLw7ixlS8fkiI_UlRNBcTEruxRfZE"} downloadType={DownloadType.game}/>
          
    
          
          
        </div>
      )
}
