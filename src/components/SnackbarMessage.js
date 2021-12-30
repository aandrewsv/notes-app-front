import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant='outlined' {...props} />;
}

const SnackbarMessage = () => {
    const { ui } = useContext(GlobalContext);
    const handleClose = () => {
        ui.setSnackbar({ ...ui.snackbar, message: false });
    };
    return (
        <Snackbar
            open={Boolean(ui.snackbar.message)}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={ui.snackbar.severity}>
                {ui.snackbar.message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarMessage;
