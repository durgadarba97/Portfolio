import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

const Description = (props) => {
    const styles = make()
    return (
            <div style = {{display: "flex", alignItems: 'center', justifyContent: 'center',}}>
                <Nav/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center"}}>
                    <Grid style = {{backgroundColor: "#191919"}} container direction = "column" justify="center" alignItems="center">
                        <CardMedia className={styles.stuff} image= {props.graphic} item xs={6}/>
                    </Grid>
                        <CardContent>
                            check this project out on <a href="https://repl.it/github/durgadarba97/AStarSnake"> Repl!</a>
                        </CardContent>


                </Card >    

            </div>
    )
}
const make = makeStyles((theme) => ({ 
    stuff : {
        backgroundColor: "#1e1e1e",
        width: 500,
        height: 500,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75,
            width: 300,
            height: 300,
          },
          [theme.breakpoints.down('md')]: {
            width: 400,
            height: 400,
          },
        textAlign: "center"
    }
}))


export default Description;
