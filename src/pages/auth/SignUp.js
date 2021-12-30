import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Button,
    CssBaseline,
    Link,
    Grid,
    Typography,
    Container,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { appRegister } from '../../helpers/apiCalls';
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const { ui } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = async ({ firstName, lastName, email, password }) => {
        try {
            let response = await appRegister({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
            });
            ui.setSnackbar({
                message: `${response.data}`,
            });
            navigate('/login');
        } catch (error) {
            ui.setSnackbar({
                message: getErrorTxtFromResponse(error.response),
                severity: 'error',
            });
        }
    };

    // Validations
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required')
            .min(2, 'First Name must be at least 2 characters')
            .max(40, 'First Name must not exceed 40 characters'),
        lastName: Yup.string()
            .required('Last Name is required')
            .min(2, 'First Name must be at least 2 characters')
            .max(40, 'First Name must not exceed 40 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf(
                [Yup.ref('password'), null],
                'Confirm Password does not match',
            ),
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
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link
                            href='#'
                            onClick={() => navigate('/login')}
                            variant='body2'
                        >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete='fname'
                            name='firstName'
                            variant='outlined'
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            autoFocus
                            {...register('firstName')}
                            error={errors.firstName ? true : false}
                        />
                        <Typography variant='inherit' color='textSecondary'>
                            {errors.firstName?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='lastName'
                            label='Last Name'
                            name='lastName'
                            autoComplete='lname'
                            {...register('lastName')}
                            error={errors.lastName ? true : false}
                        />
                        <Typography variant='inherit' color='textSecondary'>
                            {errors.lastName?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            {...register('email')}
                            error={errors.email ? true : false}
                        />
                        <Typography variant='inherit' color='textSecondary'>
                            {errors.email?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            {...register('password')}
                            error={errors.password ? true : false}
                        />
                        <Typography variant='inherit' color='textSecondary'>
                            {errors.password?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            name='passwordConfirm'
                            label='Confirm Password'
                            type='password'
                            id='passwordConfirm'
                            {...register('confirmPassword')}
                            error={errors.confirmPassword ? true : false}
                        />
                        <Typography variant='inherit' color='textSecondary'>
                            {errors.confirmPassword?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick={handleSubmit(onSubmit)}
                >
                    Sign Up
                </Button>
            </div>
        </Container>
    );
}
