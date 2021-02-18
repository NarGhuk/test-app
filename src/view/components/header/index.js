import React from 'react';
import {
    CircularProgress,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    AppBar,
    Button
} from '@material-ui/core';
import {useStyles} from './makeStyles'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Email} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import {useContextData} from '../../../context';
import {mainLogoSelector} from '../../../redux/selectors/main-logo';

export default function SearchAppBar() {
    const {toggleDrawer, toggleContact, setSearchedCardsName} = useContextData();
    const classes = useStyles();
    const {data: mainLogo, isLoading} = useSelector((state) => mainLogoSelector(state));

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
                        {isLoading ? <CircularProgress color="inherit"/> :
                            <img className={classes.mainLogo} src={mainLogo} alt={'logo'}/>}
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
                            onChange={(ev) => setSearchedCardsName(ev)}
                        />

                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={toggleContact()}
                        startIcon={<Email/>}
                    >
                        Email
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}