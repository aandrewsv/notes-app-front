import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        background: {
            secondary: 'violet',
        },
    },
});
export default function Create() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography
                    variant='h6'
                    color='textSecondary'
                    component='h2'
                    gutterBottom
                >
                    Create a New Note
                </Typography>
                <Button
                    sx={{
                        color: 'background.secondary',
                        fontSize: 60,
                    }}
                    onClick={() => console.log('You Clicked Me')}
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </Container>
        </ThemeProvider>
    );
}
