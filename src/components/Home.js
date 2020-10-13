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
    const projects =   [{
        url: '/cactus',
        title: 'Cactus - Programming Language',
      },
      {
        url: '/snake',
        title: 'Snake',
      },
      {
        url: '/shell',
        title: 'Custom C Shell'
      }
    ]
    const upcomingprojects = [{
        url: '/imagecompression',
        title: 'Image Compression',
    },
    {
        url: '/gameoflife',
        title: 'Conway\'s Game of Life (Image Compression pt.2)',
    },

    ]
    return ( 
    <div >
        <Nav/>
        {/* <Card className={styles.media}> */}
                {/* <CardMedia style={{height:0, paddingTop:'56.25%'}}  image= {require("../images/me.jpeg")} /> */}
        {/* </Card > */}

        <CardMedia className={styles.media} image= {require("../images/me.jpeg")}/>

        <Card style={{background:"#908a78"}} id="projects">
            <Typography variant = {"h6"} style={{padding:"2%", paddingLeft:"8%", color:"white"}}> About Me: </Typography>
            <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white",width:"75%"}}>
                Hey, welcome to my portfolio! A lot of things are still in the works, but I wanted a place to put down my thoughts and show off my projects. 
                A lot of stuff on here is pretty short form, so check out my GitHub or feel free to reach out to me.
            </Typography>
            <Typography variant = {"h6"} style={{paddingTop:"4%", paddingLeft:"8%", color:"white"}}>  Featured Projects: </Typography>
            <Projects projects = {projects}/>
            <Typography variant = {"h6"} style={{paddingTop:"4%", paddingLeft:"8%", color:"white"}}>  Upcoming Projects: </Typography>
            <Projects projects = {upcomingprojects}/>
            
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
        // paddingTop:'56.25%',
        width: "100%",
        height:600,
        [theme.breakpoints.down('sm')]: {
            width:"100%",
            height: "",
          },
    },
    card: {
        marginTop: 15
    }

}));

export default Home;
