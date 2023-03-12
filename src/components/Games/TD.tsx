/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import td from "../../img/TD.png"




import Download, { DownloadType } from '../download';
import "../../scss/CatsCSS/components/_img.scss"

function previewFiles() {
  
  const files = (  document.querySelector("input[type=file]") as any).files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif|zip)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          
          console.log(this.result);
          
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

export default function TD() {
  var a= Array.prototype;
  console.log(a)
  return (
    <div>
        
        
        Web Build doesn't work.
      <h2>
        tower defence
      </h2>
    
      <img src={td} width={"200px"} height={"200px"}/><br/>
      <Download url={"https://www.googleapis.com/drive/v3/files/1CHD9LFU_02jnaB_aaS6w8OzXrEG_8tQR?alt=media&key=AIzaSyCY8ipLw7ixlS8fkiI_UlRNBcTEruxRfZE"} downloadType={DownloadType.game}/>

      
      <input id="browse" type="file" onChange={previewFiles} multiple />
    </div>
  )
}
