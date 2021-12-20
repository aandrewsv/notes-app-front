import { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    FormControlLabel,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    Button,
    makeStyles,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
});
export default function Create() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [bodyError, setBodyError] = useState(false);
    const [tag, setTag] = useState('Money');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setBodyError(false);
        if (title === '') setTitleError(true);
        if (body === '') setBodyError(true);
        if (title && body) {
            fetch('http://localhost:8000/api/notes/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, body, tag }),
            }).then(() => navigate('/'));
        }
    };

    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                component='h2'
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField
                    onChange={(e) => setBody(e.target.value)}
                    className={classes.field}
                    label='Body'
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={bodyError}
                />
                <FormControl className={classes.field}>
                    <FormLabel>Note Tag</FormLabel>
                    <RadioGroup
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    >
                        <FormControlLabel
                            value='M'
                            control={<Radio />}
                            label='Money'
                        />
                        <FormControlLabel
                            value='T'
                            control={<Radio />}
                            label='Todos'
                        />
                        <FormControlLabel
                            value='R'
                            control={<Radio />}
                            label='Reminders'
                        />
                        <FormControlLabel
                            value='W'
                            control={<Radio />}
                            label='Work'
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}
