import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

function Projects(props) {
  const styles = useStyles();
  const projects = props.projects
  
  return (
    <div className={styles.root}>
      {
        projects.map((proj) => (
          <Paper className={styles.paper} elevation={0}>
            <span className={styles.title}>
              <Typography> Snake </Typography>
              <Typography className={styles.description}> This is thedescriptio n.asd, fnas;dlfn;asl fmns;a,mfns.,mf.s,dmnfs ,mfn.as,malsdkf sldfm.s,maa jshgdkfjhsfdkjahsgfkjhasgdfkj hasgdfkjhdsacbkjbsjsdcjs hbdcjhfjhgasj dfhgaskjfhgaksjdfhgajshfgka jshdgfakjshgf djhagskdhjfgs akhjdf/.,as.a,a/dmfa</Typography>
            </span>

            <CardMedia className = {styles.image} image= {require('../images/fib.jpeg')}/>
          </Paper>
        ))
      }

    </div>

  );
}

const useStyles = makeStyles({
    root : {
      justifyContent : 'center',
      alignItems : 'center',
      height : '100vh'
    },

    paper : {
      width : '90vw',
      // height : '60%',
      marginTop : '10%',
      marginBottom : '10%',
      background : 'black',
      display : 'flex',
      flexFlow: 'row wrap',
      // justifyContent : 'flex-end'
    },

    title : {
      color : 'white',
      width : "40vw",
      display : 'flex',
      flexFlow: 'column wrap',
      justifyContent : 'center',
      // alignItems : 'center',
      margin : '5%'
    },

    image : {
      // position : 'absolute',
      width : '40vw',
      paddingTop : '10%'
      // paddingTop: '10%', // 16:9,
      // marginTop:'30'50

    }
});

export default Projects;