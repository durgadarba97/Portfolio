import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Projects from './Projects'
import Contact from './Contact'
import Typography from "@material-ui/core/Typography"
import Nav from "./Nav"
import cactus2 from '../images/cactus2.gif'
import meatabeach from '../images/meatabeach.jpeg';
import AboutMe from './AboutMe';



const Home = () => {
    const styles = make()
    const projects =   [{
        url : '/cactus',
        title : 'Cactus - Programming Language',
      },
      {
        url: '/snake',
        title: 'Snake',
        image : 'portfolio/src/images/cactus2.gif'
      },
      {
        url: '/shell',
        title: 'Custom C Shell',
        image : 'portfolio/src/images/cactus2.gif'
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
    <div className={styles.root}>
            <div className={styles.main}>
                <Nav/>
                <Projects projects = {projects}/>
            </div>

            <AboutMe/>
            <Contact/> 



        {/* <Card style={{background:"#908a78"}} id="projects">
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
        <Contact/> */}
    </div>

    )
}

const make = makeStyles((theme) => ({ 
    root : {
        justifyContent: "center",
        alignItems: "center",
    },

    main : {
        minHeight : '425vh',
        minWidth : '100vw',
        backgroundImage : `url(${meatabeach})`,
        backgroundPosition: '50% 25%', 
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover',

        backgroundAttachment: 'fixed'
    },
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
