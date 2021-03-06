import { useEffect } from 'react';
import {
    Grid,
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    ButtonGroup,
    Button,
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

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
        date: {
            flexGrow: 1,
        },
        avatar: {
            marginLeft: theme.spacing(2),
        },
    };
});

const Layout = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

            <AppBar className={classes.appbar} elevation={1}>
                <Toolbar>
                    {/* <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMM Y')}
                    </Typography>
                    <Typography>{`Hello UserName`}</Typography>
                    <Button disabled>Logout</Button> */}
                    <Grid container justifyContent='flex-end'>
                        <ButtonGroup
                            variant='contained'
                            color='secondary'
                            aria-label='contained primary button group'
                        >
                            <Button onClick={() => navigate('/login')}>
                                Login
                            </Button>
                            <Button onClick={() => navigate('/register')}>
                                Register
                            </Button>
                        </ButtonGroup>
                    </Grid>
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
                        Notes App
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
                {props.children}
            </div>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
