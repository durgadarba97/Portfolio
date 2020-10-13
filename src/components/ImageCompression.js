import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Nav from './Nav';  
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Footer from "./Footer"

const ImageCompression = (props) => {
    const styles = make()
    return (
        <div style = {{alignItems: 'center', justifyContent: 'center',}}>
                <Nav/>
                <Card style = {{width: "100%", justifyContent: "center", alignItems:"center",  backgroundColor:"#908a78", color:"white"}}>
                    <Grid style = {{backgroundColor: "#191919"}} container direction = "column" justify="center" alignItems="center">
                        <CardMedia className={styles.media} image= {props.graphic} item xs={6}/>
                    </Grid>
                        <CardContent>
                        <Typography variant = {"h3"} style={{paddingLeft:"8%", color: "white"}}> Image Compression - </Typography>
                        <br/><br/>
                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> How I did it </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                        I don't know if you've ever seen the show Silicon Valley, but it's easly one of my favorite TV shows all time.
                        The premise of the first couple seasons is that the main character, Richard Hensdricks, creates his own image compression algorithm called "Middle Out".
                        Heavily inspired by this, I decided to learn about how image compression works and working on trying building my own algorithm. The example above is the image data I'm getting when implementing
                        JPEG. <br/><br/>

                        Roughly, how it works right now is:
                        <ol>
                                <li>Turns RGB to YCbCr</li>
                                <li>Downsamples the color data</li>
                                <li>Implements Discrete Cosine Transform to get colors as a frequency of intensity</li>
                                <li>Quantizes the frequency matrix to remove unecessary data</li>
                                <li>Codes the data by running through matrix in a zig-zag fashion</li>
                                <li>Save this output to a file</li>
                        </ol>  
                        As you can see, this is a pretty complicated process of reading a manipulating image data and so far I've only been able to encode the data. Turning it back to a computer 
                        readbable should, ideally, only involve reversing this process. This project has been incredibly fascinating because it's a side of programming that never got talked about in
                        school. Discrete Cosine Transform, the main idea of this project, was something I learned about in my Electrical Engineering classes as a way of analyzing frequencies of 
                        electrical signals so I think it's pretty cool to see it being applied so abstractly here. 
                        </Typography>
                        <br/><br/>

                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> To Do </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li>Make a standard for saving the files </li>
                                <li>Decode the output to get the picture back</li>
                            </ul>
                        </Typography>

                        <Typography variant = {"h4"} style={{paddingLeft:"8%", color: "white"}}> Resources </Typography>
                        <Typography variant = {"subtitle1"} style={{paddingLeft:"8%", color: "white", paddingRight:"8%"}}>
                            <ul>
                                <li><a href = "https://en.wikipedia.org/wiki/JPEG#JPEG_codec_example">This Wikipedia article describes it pretty well</a></li>

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
        width: 950,
        height: 550,
        marginTop: 60,
        [theme.breakpoints.down('sm')]: {
            marginTop: 75, 
            width: 550,
            height: 250,
          },
        //   [theme.breakpoints.down('md')]: {
        //     width: 400,
        //     height: 400,
        //   },
        textAlign: "center"
    },


}))


export default ImageCompression;
