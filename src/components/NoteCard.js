import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
    Chip,
    Avatar,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    tag_bg: {
        backgroundColor: (note) => {
            switch (note.tag) {
                case 'Work':
                    return '#ffcdd2';
                case 'Money':
                    return '#c8e6c9';
                case 'Todos':
                    return '#b2ebf2';
                case 'Reminders':
                    return '#ffecb3';
                default:
                    return '#d7ccc8';
            }
        },
    },
    tag_avatar_bg: {
        backgroundColor: (note) => {
            switch (note.tag) {
                case 'Work':
                    return '#ffcccb';
                case 'Money':
                    return '#c8e6c9';
                case 'Todos':
                    return '#b2ebf2';
                case 'Reminders':
                    return '#ffecb3';
                default:
                    return '#d7ccc8';
            }
        },
    },
    tag_chip_bg: {
        backgroundColor: (note) => {
            switch (note.tag) {
                case 'Work':
                    return '#cb9ca1';
                case 'Money':
                    return '#97b498';
                case 'Todos':
                    return '#81b9bf';
                case 'Reminders':
                    return '#cbba83';
                default:
                    return '#a69b97';
            }
        },
    },
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);
    return (
        <div>
            <Card elevation={2} className={classes.tag_bg}>
                <CardHeader
                    avatar={<Avatar>{note.tag[0].toUpperCase()}</Avatar>}
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
