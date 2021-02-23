import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"



const AStarSnake = (props) => {
    const styles = make()
    return (
            <div className={styles.root}>
                {/* <Nav animation={false}/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center",  backgroundColor:"#908a78", color:"white"}}>
                    <Grid style = {{backgroundColor: "#191919"}} container direction = "column" justify="center" alignItems="center">
                        <CardMedia className={styles.media} image= {props.graphic} item xs={6}/>
                    </Grid>
                        <CardContent>
                        <Typography variant = {"h3"} style={{paddingLeft:"8%", color: "white"}}> Snake- </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white"}}>Check this project out on <Link color="blue" target="_blank" href="https://repl.it/github/durgadarba97/AStarSnake"> Repl!</Link><br/><br/></Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                        Snake was built using python and the pygame GUI library. Originally, it was designed as a way to teach myself Python (pun intended) but over the years grew into a way for me to 
                        to compare different path finding algorithms. <br/>Currently, it's using A Star to solve itself. This sound nice in theory because it ensures finding the fastest path to the food, but this also means that the path to getting there is disorganized. When the snake gets longer,
                        It becomes hard for it to not box itself in. I think this problem can be solved by making a neural net to figure out which algorithm to use when. Kind of a lofty goal, but I think 100% doable. <br/>
                        Also, I played around quite a bit with how I organized the project. Right now, it has this kind of structure: <br/><br/>
                        <Grid container direction = "column" justify="center" alignItems="center">
                        <table item xs={6} style={{border:"1px solid black",width:"25%"}}>
                                <tr>
                                    <th style={{border:"1px solid black"}}>AI</th>
                                </tr>
                                <tr>
                                    <th style={{border:"1px solid black"}}>Game Logic</th>
                                </tr>
                                <tr>
                                    <th style={{border:"1px solid black"}}>GUI</th>
                                </tr>
                            </table>
                        </Grid>
                        <br/>
                        This was set up in such that the Game Logic abstracts the GUI class and the AI class abstracts the Game Logic. I decided this was the best way to do it so that I didn't have to deal with the pixels when implementing algorithms.
                        <br/><br/>
                        </Typography>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> To Do </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>Implement Breadth First Search</li>
                                <li>Make it output the score</li>
                                <li>Figure out the Neural Net</li>
                                <li>Clean up code</li>
                            </ul>
                        </Typography>

                        </CardContent>
                </Card >     */}
                <Nav/>

                <Grid className={styles.mainGrid}>
                <Typography gutterBottom variant="h4"> Snake -</Typography>
                <Typography gutterBottom variant="h5"> Built Snake and implemented several algortihms to solve itself.</Typography>

                <img className={styles.img} alt="imagecompression" src= {require('../images/snake.gif')}/>

                        <Typography variant = {"h4"}> How I did it </Typography>
                        <Typography variant = {"subtitle1"}>Check this project out on <a style = {{color : 'white'}} href="https://repl.it/github/durgadarba97/AStarSnake"> Repl!</a><br/><br/></Typography>
                        <Typography variant = {"subtitle1"}>
                        Snake was built using python and the pygame GUI library. Originally, it was designed as a way to teach myself Python (pun intended) but over the years grew into a way for me to 
                        to compare different path finding algorithms. <br/>Currently, it's using A Star to solve itself. This sound nice in theory because it ensures finding the fastest path to the food, but this also means that the path to getting there is disorganized. When the snake gets longer,
                        It becomes hard for it to not box itself in. I think this problem can be solved by making a neural net to figure out which algorithm to use when. Kind of a lofty goal, but I think 100% doable. <br/>
                        Also, I played around quite a bit with how I organized the project. Right now, it has this kind of structure: <br/><br/>
                        <Grid container direction = "column" justify="center" alignItems="center">
                        <table item xs={6} style={{border:"1px solid black",width:"25%"}}>
                                <tr>
                                    <th style={{border:"1px solid black"}}>AI</th>
                                </tr>
                                <tr>
                                    <th style={{border:"1px solid black"}}>Game Logic</th>
                                </tr>
                                <tr>
                                    <th style={{border:"1px solid black"}}>GUI</th>
                                </tr>
                            </table>
                        </Grid>
                        <br/>
                        This was set up in such that the Game Logic abstracts the GUI class and the AI class abstracts the Game Logic. I decided this was the best way to do it so that I didn't have to deal with the pixels when implementing algorithms.
                        <br/><br/>
                        </Typography>
                        <Typography variant = {"h4"}> To Do </Typography>
                        <Typography variant = {"subtitle1"}>
                            <ul>
                                <li>Implement Breadth First Search</li>
                                <li>Make it output the score</li>
                                <li>Figure out the Neural Net</li>
                                <li>Clean up code</li>
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


export default AStarSnake;
