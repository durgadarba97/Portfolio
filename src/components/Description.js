import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';
import Home from './Home';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const Description = (props) => {
    return (
            <div>
                {/* <Nav/> */}
                <Card>
                    <CardMedia style={{height:0, paddingTop:'56.25%'}}  image= {require("../images/me.jpeg")} />
                    <CardContent>
                        {props.text}
                    </CardContent>
                </Card >    

            </div>

    
    )
}



export default Description;
