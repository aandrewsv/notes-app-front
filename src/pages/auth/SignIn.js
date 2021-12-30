import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Button,
    CssBaseline,
    Grid,
    TextField,
    Container,
    Link,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { appLogin } from '../../helpers/apiCalls';
import GlobalContext from '../../context/global-context';
import { getErrorTxtFromResponse } from '../../helpers/helpers';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const { ui } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = async ({ email, password }) => {
        try {
            let response = await appLogin({
                email,
                password,
            });
            ui.setSnackbar({
                message: 'Authenticated',
            });
            navigate('/');
        } catch (error) {
            ui.setSnackbar({
                message: getErrorTxtFromResponse(error.response),
                severity: 'error',
            });
        }
    };

    // Validations
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string().required('Password is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        {...register('email')}
                        error={errors.email ? true : false}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        {...register('password')}
                        error={errors.password ? true : false}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link
                                href='#'
                                onClick={() => navigate('/register')}
                                variant='body2'
                            >
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
