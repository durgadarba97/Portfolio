import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Github from "@material-ui/icons/GitHub"
import Resume from "@material-ui/icons/PictureAsPdf"
import Linkdin from "@material-ui/icons/LinkedIn"
import IconButton from '@material-ui/core/IconButton'
import Typography from "@material-ui/core/Typography"
import resume from "../images/DurgaDarbaResume.pdf"





const Footer = () => {
    const styles = make()
    return ( 
        <div className={styles.contact}>

                <IconButton className={styles.links} target="_blank" href="https://github.com/durgadarba97?tab=repositories">
                    < Github/>
                </IconButton>
                <IconButton className={styles.links} target="_blank" href={resume}>
                    < Resume/>
                </IconButton>
                <IconButton className={styles.links} target="_blank" href="https://www.linkedin.com/in/durga-darba-96a1841a4/">
                    < Linkdin/>
                </IconButton>
        </div>
    )
}

const make = makeStyles((theme) => ({
    contact: {
        background: "#cfc7b0",
        overflow: "hidden"
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    links: {
        padding: 20,
    }

}));

export default Footer;
