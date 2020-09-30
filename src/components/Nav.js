import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import {Router, Route} from "react-router";
import ButtonBase from '@material-ui/core/ButtonBase'

const Nav = () => {
    const styles = make()
    return (
        <AppBar static style={{background:"#2a2a2b", marginBottom: 10}}>
            <Toolbar style={{flexDirection:"row", justifyContent:"center", alignText:"center"}}>
                <Typography component="h2" variant="h6" color="inherit" className={styles.typo} style={{fontFamily:'serif', width:"20%"}}>
                Durga Darba : 
                </Typography>
                
                <ButtonBase>
                    <Typography component="h2" variant="subtitle1" color="white" className={styles.typo}>
                    home
                    </Typography>
                </ButtonBase>

                <ButtonBase>
                    <Typography component="h2" variant="subtitle1" color="inherit" className={styles.typo}>
                    projects
                    </Typography>
                </ButtonBase>

                <ButtonBase>
                    <Typography component="h2" variant="subtitle1" color="inherit" className={styles.typo}>
                    connect
                    </Typography>
                </ButtonBase>

            </Toolbar>
        </AppBar>
    )
}

const make = makeStyles({
    typo : {
        flexGrow: 1,
        // fontSize: 24,
        padding: 15,
        width: "10%"
    }

});


export default Nav;
