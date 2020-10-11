import React from 'react';
import Home from './Home';
import { withStyles } from '@material-ui/core/styles';
import AStarSnake from "./AStarSnake"
import Cactus from "./Cactus"
import {BrowserRouter, Route, Switch} from "react-router-dom";



class Portfolio extends React.Component {
      

    render() {
        const { classes } = this.props;
        return(
            <div style={classes.background}>              
                <BrowserRouter>
                <Switch>
                    <Route path="/snake" render={() => <AStarSnake text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/snake.gif")}/>}/>
                    <Route path="/cactus" render={() => <Cactus text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/cactus2.gif")}/>}/>
                    {/* <Route path="/imagecompression" render={() => <AStarSnake text="check this project out on <a href=https://repl.it/github/durgadarba97/AStarSnake > Repl!</a>" graphic = {require("../images/snake.gif")}/>}/> */}
                    <Route path="/" render={() => <Home/>}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }

}

const styles = theme => ({
    contact: {
        // background:'#F7E8C7', 
        background: "linear-gradient(-45deg, #6565A6, #FF9E9E)",
        width: "100%", 
        height: "100%", 
        direction: "flex"
    }
  });
 

export default withStyles(styles)(Portfolio);
