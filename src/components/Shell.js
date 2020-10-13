import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"
import Link from '@material-ui/core/Link';


const Shell = (props) => {
    const styles = make()
    return (
        <div style = {{alignItems: 'center', justifyContent: 'center',}}>
                <Nav/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center",  backgroundColor:"#908a78", color:"white"}}>
                    <Grid style = {{backgroundColor: "#191919"}} container direction = "column" justify="center" alignItems="center">
                        <CardMedia className={styles.media} image= {props.graphic} item xs={6}/>
                    </Grid>
                        <CardContent>
                        <Typography variant = {"h3"} style={{paddingLeft:"8%", color: "white"}}> Custom C Shell - </Typography>
                        <br/><br/>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> Features</Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>All bash commands work</li>
                            </ul>
                        </Typography>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> How I did it </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white"}}>Check this project out on <Link color="blue" target="_blank" href="https://repl.it/@durgadarba97/shell-2"> Repl!</Link><br/><br/></Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            In my Operating Systems class, one of the first projects we worked on was building our own custom bash shell. This was easily one of my favorite projects I worked on in school and a lot of the ideas from this directly inspired building Cactus.
                            I dont really have much to say on this project because it's pretty self explanatory. This project was used in the class to teach important OS concepts such as forking, background and foreground processes, and safe exiting.
                            This project was incredibly insteresting becuase it gave me a completely new perspective about how Bash works in relation to the OS.<br/><br/>
                            
                        </Typography>
                        <br/><br/>

                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> To Do </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>Implement tab autofill using Trie </li>
                            </ul>
                        </Typography>
                        </CardContent>
                </Card >    

                <Footer/>
            </div>
    )
}
const make = makeStyles((theme) => ({ 
    media : {
        backgroundColor: "#1e1e1e",
        width: 500,
        height: 400,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75, 
            width: 400,
            height: 350,
          },
        //   [theme.breakpoints.down('md')]: {
        //     width: 400,
        //     height: 400,
        //   },
        textAlign: "center"
    },


}))


export default Shell;
