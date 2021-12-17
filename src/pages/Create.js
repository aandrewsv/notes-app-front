import React from 'react'
import { Container, Typography, } from '@mui/material'
import Button from '@mui/material/Button';
import { } from '@mui/material';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log('You Clicked Me')}
        type='submit'
        color="secondary"
        variant='contained'
      >
        Submit
      </Button>

      {/* <ButtonGroup color="secondary" variant='contained'>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup> */}
    </Container>
  )
}
