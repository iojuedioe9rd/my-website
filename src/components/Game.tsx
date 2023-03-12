import React, {Suspense} from 'react'
import { useParams } from 'react-router-dom';




const Games = React.lazy(() => import("./Games"))

const TD = React.lazy(() => import("./Games/TD"))
const Insane = React.lazy(() => import("./Games/Insane"))

export default  function Game() {
  

    
  

  
  const { id } = useParams();
  
  
  
  if(id === undefined)
  {
    throw new Error("id is required")
  }
  
  switch(id)
  {
    case "0":
      return <Suspense fallback={<div>Loading...</div>}><Games></Games></Suspense>
    case "1":
      return <Suspense fallback={<div>Loading...</div>}><TD></TD></Suspense>
    case "2":
      return <Suspense fallback={<div>Loading...</div>}><Insane></Insane></Suspense>
  }
  
  return (
    <div className='card'>
      <h1 className='card-title'>
        404
      </h1>
      <p className='card-body text-black'>
      Game not found.
      
      <div>
        Id: {id}
      </div>
      </p>
      
    </div>
  )
}
