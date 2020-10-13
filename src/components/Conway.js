import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"

const Conway = (props) => {
    const styles = make()
    return (
        <div style = {{alignItems: 'center', justifyContent: 'center',}}>
                <Nav/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center",  backgroundColor:"#908a78", color:"white"}}>
                    
                        <CardContent style = {{marginTop: 60, height: "100%"}}>
                        <Typography variant = {"h3"} style={{paddingLeft:"8%", color: "white"}}> Conway's Game of Life (Image Compression pt. 2) - </Typography>
                        <br/><br/>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> How I want to do it </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                        This project is something I've been thinking about and wanting to do for quite sometime, so I thought I'd throw it on here 
                        to hold myself accountable to doing it.  
                        <br/><br/>
                        The idea here is what if there was a way to encode image data using Conway's Game of Life (if you don't know what that is please see the resources). 
                        Essentially, how I envision it working is you give the algorithm the image you want to compress. From here, it'd figure how to reproduce the image using Conway's and save the starting nodes.
                        Then everytime the user wants to access the image, it'd run Conway's to get the resulting output.
                        <br/><br/>
                        Truthfully, this might be the LEAST effecient way to compress an image. Conway's Game of Life isn't meant to go backwards because it's almost impossible to predict if a cell was living in the 
                        previous generation. The only true way to do this I think would be guesstimating starting points and seeing if the living cells evolve to the desired image. I think the best way to implement this
                        is with a convolutional neural network and gradient descent. Even still, this is a pretty ineffecient way to do this because there really isn't a way of saying how long it would take the algorithm 
                        to solve the image. AI is something I would love to explore a lot in the future, which is exactly why I'd love to do this project. Obviously, I'm still in the early stages of learning about this so let
                        me know and email me if you have any ideas. 
                        </Typography>
                        <br/><br/>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> Resources </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li><a href = "https://www.kaggle.com/c/conway-s-reverse-game-of-life">A blog post about it</a></li>
                                <li><a href = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">What is Conway's Game of Life anyway</a></li>

                            </ul>
                        </Typography>
                        </CardContent>
                </Card >    

                <Footer/>
            </div>
    )
}
const make = makeStyles((theme) => ({ 
    media : {
        backgroundColor: "#1e1e1e",
        width: 950,
        height: 550,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75, 
            width: 550,
            height: 250,
          },
        //   [theme.breakpoints.down('md')]: {
        //     width: 400,
        //     height: 400,
        //   },
        textAlign: "center"
    },


}))


export default Conway;
