import React from 'react';
import Nav from './Nav'
import Home from './Home';
import { withStyles } from '@material-ui/core/styles';
import Description from "./Description"
import {BrowserRouter, Route, Switch} from "react-router-dom";



class Portfolio extends React.Component {
      

    render() {
        const { classes } = this.props;
        return(
            <div style={classes.background}>    
                <Nav></Nav>            
                <BrowserRouter>
                <Switch>
                    <Route path="/cactus" render={() => <Description text="This is Cactus"/>}/>
 
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
