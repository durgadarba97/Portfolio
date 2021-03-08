import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"




const AboutMe = () => {
    const styles = useStyles();

    return (
        <div className={styles.root} id='aboutme'>
            <Grid container className={styles.grid}>
                <Grid item sm className={styles.aboutme}>
                    <Typography className={styles.header}>
                        About Me :
                    </Typography>
                    <hr style={{borderTop: '3px solid white', marginTop:'10%', marginBottom:'10%'}}></hr>
                    <Typography className={styles.description}>
                        Hello, welcome to my website. On here you'll find projects I've worked on and have been passionate about over the years. 
                        I'm a recent graduate of Iowa State University with a major in Computer Engineering and a minor in Economics.
                        I'm super interested in exploring different concepts in data structures and algorithms and am trying to apply them to 
                        real world problems. If you have any questions or just want to say hi, feel free to reach out to me with any of my socials below. 
                        <br/><br/>
                        - Durga Darba
                    </Typography>
                </Grid>

                <Grid item sm className={styles.aboutme}>
                    <Typography className={styles.header}>
                        Skills & Interests :
                    </Typography>
                    <hr style={{borderTop: '3px solid white', marginTop:'10%', marginBottom:'10%'}}></hr>
                    <Typography>
                        <ul>
                            <li className={styles.description}>Python</li>
                            <li className={styles.description}>Java</li>
                            <li className={styles.description}>Web Development</li>
                            <li className={styles.description}>Cloud Development (AWS, Google Cloud Platform)</li>
                            <li className={styles.description}>Machine Learning</li>
                            <li className={styles.description}>Artificial Intelligence</li>
                            <li className={styles.description}>Algorithm Development</li>
                            <li className={styles.description}>Programming Languages</li>
                        </ul>
                    </Typography>
                </Grid>
            
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    header : {
        fontSize : '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize : '25px'
          },
    },
    description : {
        fontSize : '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize : '15px'
          },
          
    },
    root : {
        width : '100vw',
        // minHeight : '75vh',
        // height : '75vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : '#445068',
        color : 'white',
        marginTop : '5%',
        // margin : '5%'
    },

    grid : {
        // marginTop : '5vh',
        width : '90vw',
        // height : '80vh',
        // [theme.breakpoints.down('sm')]: {
        //     height : '100vh',
        // },
        // alignItems : 'center',
        justifyContent : 'center',
        display : 'flex',
        // backgroud : 'blue',
        // display : 'flex',
        // flexDirection : 'row',
        // justifyContent : 'space-evenly',
        // alignItems : 'stretch'

    },
    aboutme : {
        width : '50%',
        margin:'5%',
        marginLeft:'5%',
        marginRight:'5%',

        height : '90vh',
        justifyContent : 'center',
        [theme.breakpoints.down('sm')]: {
            margin:'1%',
          },
    }
}))

 export default AboutMe