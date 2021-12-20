import React from 'react';
import {
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex',
        },
        active: {
            background: '#f4f4f4',
        },
        title: {
            padding: theme.spacing(2),
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        toolbar: theme.mixins.toolbar,
    };
});

const Layout = ({ children }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/',
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create',
        },
    ];

    return (
        <div className={classes.root}>
            {/* App Bar */}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography>Welcome to the ninja notes website</Typography>
                </Toolbar>
            </AppBar>
            {/* Side Drawer */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                {/* List / Links  */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.text}
                            button
                            onClick={() => navigate(item.path)}
                            className={
                                location.pathname === item.path
                                    ? classes.active
                                    : null
                            }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
