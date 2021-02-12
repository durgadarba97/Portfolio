import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"




const AboutMe = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Grid container className={styles.grid}>
                <Grid item sm className={styles.aboutme}>
                    <Typography variant='h4'>
                        About Me :
                    </Typography>
                    <hr style={{borderTop: '3px solid white', marginTop:'10%', marginBottom:'10%'}}></hr>
                    <Typography variant='h6'>
                        Hello, welcome to my website. On here you'll find projects I've worked on and have been passionate about over the years. 
                        Currently, I'm a recent graduate of Iowa State University with a major in Computer Engineering with a minor in Economics.
                        I'm hoping to apply my knowledge in data structures 
                    </Typography>
                </Grid>

                <Grid item sm className={styles.aboutme}>
                    <Typography variant='h4'>
                        Skills & Interests :
                    </Typography>
                    <hr style={{borderTop: '3px solid white', marginTop:'10%', marginBottom:'10%'}}></hr>
                    <Typography variant='h6'>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Web Development</li>
                            <li>Cloud Development (AWS, Google Cloud Platform)</li>
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Algorithm Development</li>
                            <li>Programming Languages</li>
                        </ul>
                    </Typography>
                </Grid>
            
            </Grid>
        </div>
    )
}

const useStyles = makeStyles({
    root : {
        width : '100vw',
        // minHeight : '75vh',
        // maxHeight : '75vh',
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
        alignItems : 'center',
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
        height : '90vh',
        justifyContent : 'center'
    }
})
 export default AboutMe