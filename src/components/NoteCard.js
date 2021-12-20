import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
    Chip,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    tag_bg: {
        backgroundColor: (note) => {
            if (note.tag == 'work') return '#ffcdd2';
            if (note.tag == 'money') return '#c8e6c9';
            if (note.tag == 'todos') return '#b2ebf2';
            if (note.tag == 'reminders') return '#ffecb3';
        },
    },
    tag_chip_bg: {
        backgroundColor: (note) => {
            if (note.tag == 'work') return '#cb9ca1';
            if (note.tag == 'money') return '#97b498';
            if (note.tag == 'todos') return '#81b9bf';
            if (note.tag == 'reminders') return '#cbba83';
        },
    },
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);
    return (
        <div>
            <Card elevation={2} className={classes.tag_bg}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={
                        <Chip
                            className={classes.tag_chip_bg}
                            label={note.tag}
                            variant='outlined'
                        />
                    }
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;
