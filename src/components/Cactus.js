import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"
import Link from '@material-ui/core/Link';


const Cactus = (props) => {
    const styles = make()
    return (
        <div style = {{alignItems: 'center', justifyContent: 'center',}}>
                <Nav/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center",  backgroundColor:"#908a78", color:"white"}}>
                    <Grid style = {{backgroundColor: "#191919"}} container direction = "column" justify="center" alignItems="center">
                        <CardMedia className={styles.media} image= {props.graphic} item xs={6}/>
                    </Grid>
                        <CardContent>
                        <Typography variant = {"h3"} style={{paddingLeft:"8%", color: "white"}}> Cactus- </Typography>
                        <br/><br/>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> Features</Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>Interpreted, dynamically typed</li>
                                <li>If statements, for and while loops, functions, and supports recursion</li>
                                <li>Variable scoping</li>
                            </ul>
                        </Typography>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> How I did it </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white"}}>Check this project out on <Link color="blue" target="_blank" href="https://repl.it/github/durgadarba97/Cactus"> Repl!</Link><br/><br/></Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            Building a programming language was easily the hardest and longest project I have ever worked on. It gave me a completely new perspective on approaching many technical and design aspects of coding. This idea for this project
                            came because I love how lightweight Python is but I hate that it doesn't have curly braces like Java so this is me trying to make a happy medium. <br/><br/>
                            This entire project was built using an idea called Chomsky's Heirarchy. Honestly, the idea is pretty hard to explain so I recommend you check out some of the resources I provided at the bottom to get a basic idea of what I'm doing.
                            The Cactus file is an entry point for the code and handles reading the input file. The Scanner class is used scan and tokenize each lexeme. I use this to make sure there aren't any syntax errors. The Abstract Syntax Tree (AST) is the bread and butter of the project. 
                            I implemented a recursive descent parser that runs through the output of the scanner and creates a tree that can be parsed when evaluating. The idea is that each statement and expression in the language represents a node in the tree and gets evaluated 
                            from the bottom up. Finally, the Error file contains all the errors that can be created and thrown by the language itself. <br/><br/>
                            This project taught me quite about the importance of coding in teams. I learned pretty early on that building a language by yourself is pretty difficult because it's hard to predict how people code. For example, when I write a for loop, I tend to put the 
                            {" {"}  at the end of the loop instead of a new line. However, I recognized when testing this, that not all people actually code this way. So when writing the language, I had to figure out how lax I wanted to be with the syntax. I think for sure that working
                            in a team would've helped me realize this idea much quicker. <br/><br/>
                            The code that's running above is this recursive fibonacci sequence written in Cactus:
                            <CardMedia className={styles.fib} image= {require("../images/fib.jpeg")} item xs={6}/>
                        </Typography>
                        <br/><br/>

                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> To Do </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>Implement classes</li>
                                <li>Implement inheritance</li>
                                <li>Make it compiled instead of interpreted</li>
                                <li>Create support for arrays. (Honestly, I don't why I didn't do this before. I kinda just forgot about them.)</li>
                            </ul>
                        </Typography>

                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> Resources </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>https://craftinginterpreters.com/contents.html</li>
                                <li>https://en.wikipedia.org/wiki/Chomsky_hierarchy</li>
                                <li>https://ruslanspivak.com/lsbasi-part1/</li>
                            </ul>
                        </Typography>
                        </CardContent>
                </Card >    

                <Footer/>
            </div>
    )
}
const make = makeStyles((theme) => ({ 
    fib : {
        width: 1000,
        height: 600,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75, 
            width: 800,
            height: 400,
            },
        //   [theme.breakpoints.down('md')]: {
        //     width: 400,
        //     height: 400,
        //   },
        textAlign: "center"
    },

    media : {
        backgroundColor: "#1e1e1e",
        width: 800,
        height: 600,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75, 
            width: 700,
            height: 500,
          },
        //   [theme.breakpoints.down('md')]: {
        //     width: 400,
        //     height: 400,
        //   },
        textAlign: "center"
    },


}))


export default Cactus;
