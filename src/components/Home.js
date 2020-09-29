import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Projects from './Projects'
import Contact from './Contact'
import Typography from "@material-ui/core/Typography"
import Nav from "./Nav"



const Home = () => {
    const styles = make()
    return ( 
    <div >
        <Nav/>
        <Card className={styles.media}>
                <CardMedia style={{height:0, paddingTop:'56.25%'}}  image= {require("../images/me.jpeg")} />
        </Card >

        <Card style={{background:"#908a78"}}>
            <Typography variant = {"h6"} style={{padding:"2%", paddingLeft:"8%", color:"white"}}> About Me: </Typography>
            <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white",width:"75%"}}>
                Hey, welcome to my portfolio! A lot of things are still in the works, but I wanted a place to put down my thoughts and show off my projects. 
                A lot of stuff on here is pretty short form, so check out my GitHub or feel free to reach out to me.
            </Typography>
            <Projects/>
        </Card>
        <Contact/>
    </div>

    )
}

const make = makeStyles((theme) => ({ 
    paper : {
        height: "10%",
        width:"95%",

    },
    media: {
        width: "100%",
        height:600,
        [theme.breakpoints.down('sm')]: {
            width:"100%",
            height: "100%",
          },
    },
    card: {
        marginTop: 15
    }

}));

export default Home;
