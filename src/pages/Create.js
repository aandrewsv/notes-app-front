import { useState } from 'react';
import {
    Container,
    FormControlLabel,
    RadioGroup,
    Typography,
} from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
});
export default function Create() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [tag, setTag] = useState('money');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);
        if (title === '') setTitleError(true);
        if (details === '') setDetailsError(true);
        if (title && details) {
            console.log({
                title,
                details,
                tag,
            });
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
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />
                <FormControl className={classes.field}>
                    <FormLabel>Note Tag</FormLabel>
                    <RadioGroup
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    >
                        <FormControlLabel
                            value='money'
                            control={<Radio />}
                            label='Money'
                        />
                        <FormControlLabel
                            value='todos'
                            control={<Radio />}
                            label='Todos'
                        />
                        <FormControlLabel
                            value='reminders'
                            control={<Radio />}
                            label='Reminders'
                        />
                        <FormControlLabel
                            value='work'
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
