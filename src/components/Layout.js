import React from 'react';
import { makeStyles, Drawer, Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
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
});

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            // app bar // side drawer
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <Typography variant='h5'>Ninja Notes</Typography>
            </Drawer>
            <div className={classes.page}>{children}</div>
        </div>
    );
};

export default Layout;