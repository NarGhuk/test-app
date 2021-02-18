import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useDrawer} from '../../../context';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {useSelector} from 'react-redux';
import {useStyles} from './makeStyles';
import {categoriesSelector} from '../../../redux/selectors/categories';

export default function LeftBarCategories() {
    const classes = useStyles();
    const {toggleDrawer, visible} = useDrawer();
    const categorise = useSelector((state) => categoriesSelector(state) );
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={visible}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {categorise.map((item) => (
                        <ListItem button key={item.name}>
                            <ListItemText  primary={item.name}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
};
