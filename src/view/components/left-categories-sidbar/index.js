import React from 'react';
import {
    ListItemText,
    CssBaseline,
    IconButton,
    ListItem,
    Divider,
    Drawer,
    List
} from '@material-ui/core';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {useSelector} from 'react-redux';
import {categoriesListNameSelector} from '../../../redux/selectors/categories-name-list';
import {useContextData} from '../../../context';
import {useDispatch} from 'react-redux';
import {setCurrentCut} from '../../../redux/reducers/uiReduserCurrentCat/action-creators';
import {useStyles} from './makeStyles';

export default function LeftBarCategories() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {toggleDrawer, visible} = useContextData();
    const categoriseList = useSelector((state) => categoriesListNameSelector(state));
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

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
                    {categoriseList.map((item,index) => (
                        <ListItem
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index)}
                            button key={item.name}>
                            <ListItemText primary={item.name}
                                          onClick={() => dispatch(setCurrentCut(item.name))}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
};
