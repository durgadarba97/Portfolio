import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Github from "@material-ui/icons/GitHub"
import Resume from "@material-ui/icons/PictureAsPdf"
import Linkdin from "@material-ui/icons/LinkedIn"
import IconButton from '@material-ui/core/IconButton'
import resume from "../images/DurgaDarbaResume.pdf"
import DraftsIcon from '@material-ui/icons/Drafts';

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
                <IconButton className={styles.links} target="_blank" href="https://www.linkedin.com/in/durgadarba/">
                    < Linkdin/>
                </IconButton>
                <IconButton className={styles.links} target="_blank" href="mailto:ddarba@gmail.com">
                        < DraftsIcon />
                </IconButton> 
        </div>
    )
}

const make = makeStyles((theme) => ({
    contact: {
        background: '#445068',
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
