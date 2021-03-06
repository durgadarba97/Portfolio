import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Github from "@material-ui/icons/GitHub"
import Resume from "@material-ui/icons/PictureAsPdf"
import Linkdin from "@material-ui/icons/LinkedIn"
import IconButton from '@material-ui/core/IconButton'
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import resume from "../images/DurgaDarbaResume.pdf"
import Grid from '@material-ui/core/Grid';
import me from '../images/me.jpeg'




const Contact = () => {
    const styles = make()

    return (
        <div className={styles.root} id='contact'>
            <Grid container className={styles.grid}>
                <Grid item sm className={styles.linkgrid}>
                    <IconButton className={styles.links} target="_blank" href="https://github.com/durgadarba97?tab=repositories" disableRipple={'true'}>
                        < Github fontSize={'large'}/>
                    </IconButton>
                    <IconButton className={styles.links} target="_blank" href={resume} disableRipple={'true'}>
                        < Resume fontSize={'large'}/>
                    </IconButton>
                    <IconButton className={styles.links} target="_blank" href="https://www.linkedin.com/in/durgadarba/" disableRipple={'true'}>
                        < Linkdin fontSize={'large'}/>
                    </IconButton> 
                    <IconButton className={styles.links} target="_blank" href="mailto:ddarba@gmail.com" disableRipple={'true'}>
                        < DraftsIcon fontSize={'large'}/>
                    </IconButton> 
                </Grid>

                {/* <Grid item sm className={styles.avatargrid}>
                    <Avatar src={me} className={styles.avatar}/>

                </Grid> */}
            
            </Grid>
        </div>
    )
}

const make = makeStyles((theme) => ({
    root : {
        width : '100vw',
        // margins : '10%',
        // minHeight : '75vh',
        // maxHeight : '75vh',
        background : '#445068',
        color : 'white',
        // margin : '5%'
        direction : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection : 'column',
        // },
    },

    links : {
        // margin : '5%',

    },

    linkgrid : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent : 'space-evenly',
        marginBottom : '10%'
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection : 'row',
        //   },
    },

    avatargrid : {
        margin : '5%',
        alignItems : 'center',
    },

    avatar : {
        height : '25vw',
        width : '25vw'
    }

}));

export default Contact;
