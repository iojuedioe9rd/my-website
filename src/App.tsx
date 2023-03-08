import React, { Suspense } from 'react';
import "./scss/App.scss";
import  l from "cats-logger"
import Navbar from "./components/navbar"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import "./scss/CatsCSS/index.scss"
import useCanvas from './hoots/useCanvas';
import useFetch from './hoots/useFetch';
import Container from './components/Container';


const Home = React.lazy(() => import("./components/Home"))
const Games = React.lazy(() => import("./components/Games"))
const Game = React.lazy(() => import("./components/Game"))

function App() {
 
  
  if(window.location.href.includes(".zip"))
  {
    
    if(window.location.href.includes("insane"))
    {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return (
        <div className="app">
         </div >)
    }
  }

  
  
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar>
          <Link to={"/Games/0"}><h4 className='ff-OpenSans'>Games</h4></Link>
          <br/>
          <Link to={"/"}><h4>Home</h4></Link>
        </Navbar>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path='/Games'>
            
          <Route path=":/" element={<Games></Games>}/>
              <Route path=':id' element={<Game></Game>}/>
            
           
          </Route>
        </Routes>
        </Container>
        
      </Suspense>
      
    </div>
  );
}

export default App;
