import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from '@material-ui/core/ButtonBase'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const Nav = () => {
    const styles = make()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };


   
    return (
        <div className = {styles.root}>

            <AppBar static
                elevation = {0}
                className={styles.appbar} style={{
                backgroundColor: "#2a2a2b"
            }}>
                <Toolbar style={{flexDirection:"row", justifyContent:"center", alignText:"center"}}>
                    <Typography variant="h5" className= {styles.typo} style= {{
                        color: 'white' 
                    }}> Durga Darba : </Typography>

                    <IconButton edge="end" aria-label="menu" onMouseOver={handleClick} onClick={handleClick} 
                    style={{
                        transition: 'all 0.25s ease-in-out',
                        color: 'white'

                    }}>
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        className={styles.menu}
                    >
                        <MenuItem onClick={handleClose} className={styles.menu}>
                            <ButtonBase href={"/"}>
                                <Typography component="h2" variant="subtitle1" className={styles.typo}>
                                home
                                </Typography>
                            </ButtonBase>
                        </MenuItem>
                        <MenuItem onClick={handleClose} className={styles.menu}>
                            <ButtonBase href={"/#projects"}>
                                <Typography component="h2" variant="subtitle1" className={styles.typo}>
                                projects
                                </Typography>
                            </ButtonBase>
                        </MenuItem>
                        <MenuItem onClick={handleClose} className={styles.menu}>
                            <ButtonBase href={"/#aboutme"}>
                                <Typography component="h2" variant="subtitle1" className={styles.typo}>
                                about me
                                </Typography>
                            </ButtonBase>
                        </MenuItem>
                        <MenuItem onClick={handleClose} className={styles.menu}>
                            <ButtonBase href={"/#contact"}>
                                <Typography component="h2" variant="subtitle1" className={styles.typo}>
                                connect
                                </Typography>
                            </ButtonBase>
                        </MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            
        </div>
        
    )
}

const make = makeStyles({
    root : {
        display : 'flex',
        justifyContent : 'center',
        // marginTop : '10%',
        // height : '100vh',
    },

    arrow : {
        position : 'absolute',
        alignSelf : 'flex-end',
        color : 'white',
        marginBottom : '10vh',
    },

    helloworld : {
        marginTop : '25vh',
        color : 'white',
        
    },
    appbar : {
        background:"none", 
        marginBottom: '10vh',
    },

    menu : {
        color: '#2a2a2b',

    },

    iconbutton : {
        color: '#2a2a2b'
    },

    typo : {
        flexGrow: 1,
        padding: 15,
        width: "10%",
        fontFamily : 'arial', 
        color : '#2a2a2b'

        
    }

});


export default Nav;
