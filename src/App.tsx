import React, { Suspense } from 'react';
import "./scss/App.scss";

import Navbar from "./components/navbar"
import { Link, Route, Routes } from "react-router-dom"
import "./scss/CatsCSS/index.scss"

import Container from './components/Container';


const Home = React.lazy(() => import("./components/Home"))
const Games = React.lazy(() => import("./components/Games"))
const Game = React.lazy(() => import("./components/Game"))
const CatsVsMiceTD =  React.lazy(() => import("./cats-vs-mice-td"))

function App() {
 
  
  if(window.location.href.includes("Launcher"))
  {
    if(window.location.href.includes("Cats-vs-mice-td"))
    {
        return (<div className="app">
          <Suspense fallback={<div>Loading...</div>}>
            <CatsVsMiceTD></CatsVsMiceTD>
          </Suspense>
          
        </div>)
    }
    
  }

  
  
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar>
          <Link to={"/Games/0"}><h4>Games</h4></Link>
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
          <Route path='Launcher'>
            <Route path='Cats-vs-mice-td' element={<CatsVsMiceTD></CatsVsMiceTD>}/>
          </Route>
        </Routes>
        </Container>
        
      </Suspense>
      
    </div>
  );
}

export default App;
