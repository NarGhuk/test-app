import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './makeStyles'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector} from 'react-redux';
import {useDrawer} from '../../../context';
import {mainLogoSelector} from '../../../redux/selectors/main-logo'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {Email} from '@material-ui/icons';


export default function SearchAppBar() {

    const {toggleDrawer} = useDrawer();
    const classes = useStyles();
    const {data:mainLogo, isLoading} = useSelector((state)=> mainLogoSelector(state));

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(prev => !prev)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        {isLoading ? <CircularProgress  color="white"/> :  <img className={classes.mainLogo} src={mainLogo} alt={'logo'}/>}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />

                    </div>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<Email />}
                    >
                        Email
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}