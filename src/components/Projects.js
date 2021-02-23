import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import ButtonBase from '@material-ui/core/ButtonBase';

function Projects(props) {
  const styles = useStyles();
  
  return (
    <div className={styles.root} id="projects">

      <Grid container className={styles.card}>
        <ButtonBase href={'/cactus'} style={{width : '100%'}}>
          <Grid item style={{width: 600}}>
            <img className={styles.img} alt="fibonacci" src= {require('../images/fib.jpeg')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h4"> Cactus</Typography>
            <Typography gutterBottom variant="h5"> I built an interpreted programming language in Python.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/snake'} style={{width : '100%' , flexDirection : 'row-reverse', justifyContent : 'flex-end'}}>
          <Grid item style = {{width : 500}}>
            <img className={styles.img} alt="snake" src= {require('../images/snake.gif')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h4"> Snake </Typography>
            <Typography gutterBottom variant="h5"> Built Snake and implemented several algortihms to solve itself.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/shell'} style={{width : '100%'}}>
          <Grid item style={{width: 600}}>
            <img className={styles.img} alt="shell" src= {require('../images/shell.gif')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h4"> Shell</Typography>
            <Typography gutterBottom variant="h5"> A custom bash shell I built in C for my CPRE 381 Operating Systems class.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className={styles.card}>
        <ButtonBase href={'/sparrow'} style={{width : '100%', flexDirection : 'row-reverse', justifyContent : 'flex-end'}}>
          <Grid item style = {{width : 500}}>
            <img className={styles.img} alt="dashcam" src= {require('../images/dashcamgui.png')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h4"> Dashcam Defender </Typography>
            <Typography gutterBottom variant="h5"> A dashcam that reads license plates and proveides data analytics during car accidents.</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

      <Grid container className = {styles.card}>
        <ButtonBase href={'/imagecompression'} className={styles.card}>
          <Grid item style={{width: 600, }}>
            <img className={styles.img} alt="imagecompression" src= {require('../images/imagecomp.png')}/>
          </Grid>
          <Grid item xs={12} sm container className={styles.title}>
            <Typography gutterBottom variant="h4"> JPEG Image Compression</Typography>
            <Typography gutterBottom variant="h5"> Building my own image compression algorithm. (Work in progress)</Typography>
          </Grid>
        </ButtonBase>
      </Grid>

    </div>

  );
}

const useStyles = makeStyles({
    root : {
      alignItems: 'center',
      // height : '425vh',
      width : '100vw',
      // background : 'black',
      display: 'flex',
      flexDirection : 'column',
      // margin : '5%'
    },

    card : {
      // flexDirection : 'row',
      width : '90vw',
      marginBottom : '10%',
      // marginLeft : '5%',
      // marginRight : '5%',
      // width : '90vw',
      background : '#2a2a2b',
      // justifyContent : 'flex-end',
      // minHeight : '25vh',
      // maxHeight : '50vh',
      // flexDirection : 'row-reverse', justifyContent : 'flex-end',
      flexFlow: 'column wrap',

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

      display : 'flex',
      flexFlow: 'column wrap',
      justifyContent : 'center',
      // alignItems : 'center',
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
   
});

export default Projects;