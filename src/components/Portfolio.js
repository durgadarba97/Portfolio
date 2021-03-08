import React from 'react';
import Home from './Home';
import AStarSnake from "./AStarSnake";
import Cactus from "./Cactus";
import Shell from "./Shell";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ImageCompression from './ImageCompression';
import Conway from './Conway';
import Sparrow from './Sparrow';

const Portfolio = () => { 
        return(
            <div> 
                <BrowserRouter>
                <Switch>
                    <Route path="/snake" render={() => <AStarSnake text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/snake.gif")}/>}/>
                    <Route path="/cactus" render={() => <Cactus text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/cactus2.gif")}/>}/>
                    <Route path="/shell" render={() => <Shell text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/shell.gif")}/>}/>      
                    <Route path="/sparrow" render={() => <Sparrow/>}/>              
                    <Route path="/imagecompression" render={() => <ImageCompression text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/imagecomp.png")}/>}/>                    
                    <Route path="/gameoflife" render={() => <Conway text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>"/>}/>                                       
                    <Route path="/" render={() => <Home/>}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
}

 

export default Portfolio;
