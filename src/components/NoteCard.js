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
import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import {
    getTextAndStylesOfTag,
    handleNoteTitle,
    handleNoteBody,
} from '../helpers/helpers';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    tag_bg: {
        backgroundColor: (note) => getTextAndStylesOfTag(note['tag'], 'tag_bg'),
    },
    tag_chip_bg: {
        backgroundColor: (note) =>
            getTextAndStylesOfTag(note['tag'], 'tag_chip_bg'),
    },
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);
    const navigate = useNavigate();

    return (
        <div>
            <Card elevation={2} className={classes.tag_bg}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.tag_chip_bg}>
                            {note.tag[0]}
                        </Avatar>
                    }
                    action={
                        <>
                            <IconButton
                                onClick={() => navigate(`/update/${note.id}`)}
                            >
                                <EditOutlined />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(note)}>
                                <DeleteOutlined />
                            </IconButton>
                        </>
                    }
                    title={handleNoteTitle(note)}
                    subheader={
                        <Chip
                            className={classes.tag_chip_bg}
                            size='small'
                            label={getTextAndStylesOfTag(note['tag'], 'uitext')}
                            variant='outlined'
                        />
                    }
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {handleNoteBody(note)}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;
