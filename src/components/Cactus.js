import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"


const Cactus = (props) => {
    const styles = make()
    return (
        <div className={styles.root}>
                <Nav/>

                <Grid className={styles.mainGrid}>
                <Typography gutterBottom variant="h4"> Cactus -</Typography>
                <Typography gutterBottom variant="h5"> I built a programming language</Typography>

                <img className={styles.img} alt="imagecompression" src= {require('../images/cactus2.gif')}/>

                <Typography variant = {"h4"}> Features</Typography>
                        <Typography variant = {"subtitle1"} >
                            <ul>
                                <li>Interpreted, dynamically typed</li>
                                <li>If statements, for and while loops, functions, and supports recursion</li>
                                <li>Variable scoping</li>
                            </ul>
                        </Typography>
                        <Typography variant = {"h4"}> How I did it </Typography>
                        <Typography variant = {"subtitle1"}>Check this project out on <a style = {{color : 'white'}} href="https://repl.it/github/durgadarba97/Cactus"> Repl!</a><br/><br/></Typography>
                        <Typography variant = {"subtitle1"}>
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
                        </Typography>
                        <br/><br/>

                        <Typography variant = {"h4"}> To Do </Typography>
                        <Typography variant = {"subtitle1"}>
                            <ul>
                                <li>Implement classes</li>
                                <li>Implement inheritance</li>
                                <li>Make it compiled instead of interpreted</li>
                                <li>Create support for arrays. (Honestly, I don't why I didn't do this before. I kinda just forgot about them.)</li>
                            </ul>
                        </Typography>

                        <Typography variant = {"h4"} > Resources </Typography>
                        <Typography variant = {"subtitle1"}>
                            <ul>
                                <li><a style = {{color : 'white'}} href = "https://craftinginterpreters.com/contents.html">Crafting Interpreters Book</a></li>
                                <li><a style = {{color : 'white'}} href = "https://en.wikipedia.org/wiki/Chomsky_hierarchy">Read A Little About Chomsky's</a></li>
                                <li><a style = {{color : 'white'}} href = "https://ruslanspivak.com/lsbasi-part1/">A Lisp Interpreter Written in Python</a></li>
                            </ul>
                        </Typography>

                </Grid>

                <Footer/>
            </div>
    )
}
const make = makeStyles((theme) => ({ 
    root : {
        alignItems: 'center', 
        justifyContent: 'center',
        background : '#445068',
        // width : '100vw',
        // height : '100vh',
        color : 'white'
    },

    mainGrid : {
        margin : '10vh'
    },

    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
  
      },


}))


export default Cactus;
