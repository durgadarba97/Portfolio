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
                <Typography gutterBottom variant="h4"> Sparrow -</Typography>
                <Typography gutterBottom variant="h5"> My senior design team built a custom dashcam that read license plate data in real time.</Typography>

                <img className={styles.img} alt="imagecompression" src= {require('../images/dashcamgui.png')}/>

                <Typography variant = {"h4"}> Features</Typography>
                        <Typography variant = {"subtitle1"} >
                            <ul>
                                <li>Fully prototyped custom dashcam</li>
                                <li>Integrated backend that stored user information, video snippets, and license plates.</li>
                                <li>Functioning app that allowed users to get information about specific cars.</li>
                            </ul>
                        </Typography>
                        <Typography variant = {"h4"}> How we did it </Typography>
                        <Typography variant = {"subtitle1"}>
                        For my final senior project, my group and I prototyped a dashcam that read license plate date and sends up 
                        to the cloud. We used the OpenALPR open source api to offload the machine learning aspect of reading 
                        lisence plate data live. On the backend, we follow this architecture:
                        <img className={styles.img} alt="imagecompression" src= {require('../images/architecture.jpg')}/>
                        Taken out of our final report:
                        <br/>
                        Approximately 2 million people experience severe injuries from car accidents each year
                        in the United States. We hope to drastically reduce that number with Sparrow, a product
                        designed to automatically scan license plates and alert users to reckless drivers.
                        Sparrow is a smart dashcam system that is intended to increase the safety of those who
                        use it. The system is composed of a few main components, a dash camera, an ALPR board, a
                        smartphone app, and a backend database.
                        The ALPR board takes video input from the dash camera to read and interpret license
                        plate data of the cars around the user in real-time. Then the board uploads the recorded video
                        and JSON file of the detected plates to the database. The mobile application is then used to
                        browse the database video files by the license plate identifiers.
                        In a final product, these systems will be used in tandem to alert drivers when a
                        hazardous driver is near them. If the plate of a driver that has been properly flagged as
                        dangerous is detected by the user’s system, then both an audio and visual alert will prompt the
                        user on their smartphone.
                        The system aims to make a strong impact beyond just the safety of its immediate users.
                        Through careful restricted access protocols, law enforcement could use the system to find stolen
                        vehicles, fugitives and even amber alert vehicles with locational data. As a police officer that we
                        interviewed eloquently put it, this system will “be a ring doorbell for the road”.
                            
                        </Typography>
                        <br/><br/>

                        <Typography variant = {"h4"} > Resources </Typography>
                        <Typography variant = {"subtitle1"}>
                            <ul>
                                <li><a style = {{color : 'white'}} href = "https://sddec20-11.sd.ece.iastate.edu/docs/492%20Final%20Report.pdf">Final Report</a></li>
                                <li><a style = {{color : 'white'}} href = "https://sddec20-11.sd.ece.iastate.edu/docs.html">Our project site</a></li>
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
