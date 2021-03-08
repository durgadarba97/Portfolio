import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ButtonBase from '@material-ui/core/ButtonBase';

function Projects(props) {
  const styles = useStyles();
  
  return (
    <div className={styles.root} id="projects">

      <Grid container className={styles.card}>
        <ButtonBase href={'/cactus'} className={styles.buttonbase} style={{width : '100%'}} >
          <Grid item style={{width: '100%', maxWidth : 500}}>
            <img className={styles.img} alt="fibonacci" src= {require('../images/fib.jpeg')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h5"> Cactus</Typography>
            <Typography gutterBottom variant="h6"> I built an interpreted programming language in Python that supports variable declarations, functions, recursion, and for and while loops. Currrently working on implementing classes and inhertance.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/snake'}  className={styles.buttonbase_reverse} style={{}}>
          <Grid item style = {{width: '100%', maxWidth : 400}}>
            <img className={styles.img} alt="snake" src= {require('../images/snake.gif')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h5"> Snake </Typography>
            <Typography gutterBottom variant="h6"> Built Snake and implemented algortihms such as A* to solve itself. I'm hoping to implement multithreading to this in the future to compare algortithms such Djikstra's and DFS in real time.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/shell'}  className={styles.buttonbase}>
          <Grid item style={{width: '100%', maxWidth : 400}}>
            <img className={styles.img} alt="shell" src= {require('../images/shell.gif')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h5"> Shell</Typography>
            <Typography gutterBottom variant="h6"> A custom bash shell I built in C for my CPRE 381 Operating Systems class. This project was the precursor to the Cactucs and taught me a lot about how Operating Systems handle executing processes.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/sparrow'} className={styles.buttonbase_reverse} style={{}}>
          <Grid item style = {{width : '100%',  maxWidth: 500}}>
            <img className={styles.img} alt="dashcam" src= {require('../images/dashcamgui.png')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h5"> Sparrow </Typography>
            <Typography gutterBottom variant="h6"> A dashcam I built with my team for my Senior Design final projects that reads license plates and provides data analytics during car accidents in realtime.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className = {styles.card}>     
        <ButtonBase href={'/imagecompression'} className={styles.buttonbase}>
          <Grid item style = {{width : '100%', maxWidth: 500}}>
            <img className={styles.img} alt="imagecompression" src= {require('../images/imagecomp.png')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h5"> JPEG Image Compression</Typography>
            <Typography gutterBottom variant="h6"> Implementing the JPEG algorthem. working towards building my own image compression method. (Work in progress)</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

    </div>

  );  
}

const useStyles = makeStyles((theme) => ({
    buttonbase : {
      [theme.breakpoints.down('sm')]: {
        flexDirection : 'column',
      },
    },

    buttonbase_reverse : {
      width : '100%', 
      flexDirection : 'row-reverse', 
      justifyContent : 'flex-end',
      [theme.breakpoints.down('sm')]: {
        flexDirection : 'column',
      },
    },

    root : {
      alignItems: 'center',
      // height : '425vh',
      width : '100vw',
      // background : 'black',
      display: 'flex',
      flexDirection : 'column',
      // margin : '5%'
      // marginTop : '20%'
    },

    card : {
      // flexDirection : 'row',
      width : '90vw',
      marginBottom : '5%',
      // marginLeft : '5%',
      // marginRight : '5%',
      // width : '90vw',
      background : '#2a2a2b',
      // justifyContent : 'flex-end',
      // minHeight : '25vh',
      // maxHeight : '50vh',
      // flexDirection : 'row-reverse', justifyContent : 'flex-end',
      // flexFlow: 'column wrap',
      // maxHeight : 100,

      transition: "background-color 0.25s ease",

      "&:hover" : {
        background: 'white',
        '& $title' : {
          color : '#2a2a2b'
        },
        

        
      },

    },

    // image : {
    //   // position : 'absolute',
    //   width : 650,
    //   marginLeft : '50vw',
    //   // marginBottom : '0vh',
    //   height : 400,
    //   // position : '50% 50%', 
    //   // paddingTop: '10%', // 16:9,
    //   // marginTop:'30'50
    //   // alignSelf : 'flex-end'
    // },

    title : {
      color : 'white',
      // height : '100%',
      // maWidth : '40%',
      margin : '5%',
      [theme.breakpoints.down('sm')]: {
        alignItems : 'center',
      },

      display : 'flex',
      flexFlow: 'column wrap',
      justifyContent : 'center',
      
      // background : 'blue'
    },

    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',

    },

    image : {
      width: 600,
      // height: 128,
    }
   
}));

export default Projects;