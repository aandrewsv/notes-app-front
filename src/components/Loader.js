import React, { useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../context/global-context';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Loader = () => {
    const classes = useStyles();
    const { ui } = useContext(GlobalContext);
    return (
        <div>
            {ui.loading && (
                <div>
                    {/* <LinearProgress variant="query" /> */}
                    <Backdrop className={classes.backdrop} open={true}>
                        <CircularProgress
                            color='primary'
                            thickness={5}
                            size={60}
                        />
                    </Backdrop>
                </div>
            )}
        </div>
    );
};

export default Loader;
