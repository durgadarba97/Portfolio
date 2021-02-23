import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Projects from './Projects'
import Contact from './Contact'
import HeaderPanel from "./HeaderPanel"
import meatabeach from '../images/meatabeach.jpeg';
import AboutMe from './AboutMe';



const Home = () => {
    const styles = make()

    return ( 
    <div className={styles.root}>
            <div className={styles.main} id="home">
                <HeaderPanel/>
                <Projects/>
                <AboutMe/>
                <Contact/> 
            </div>





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

    },

    main : {
        minHeight : '400vh',
        minWidth : '100vw',
        backgroundImage : `url(${meatabeach})`,
        backgroundPosition: '50% 25%', 
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        // justifyContent: "center",
        // alignItems: "center",
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
