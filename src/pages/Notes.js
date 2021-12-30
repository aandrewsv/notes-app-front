import { useState, useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import '../index.css';
import { getAllNotes, deleteNote } from '../helpers/apiCalls';
import GlobalContext from '../context/global-context';
import { getErrorTxtFromResponse } from '../helpers/helpers';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const { ui } = useContext(GlobalContext);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const { data } = await getAllNotes();
            setNotes(data);
        } catch (error) {
            ui.setSnackbar({
                message: getErrorTxtFromResponse(error.response),
                severity: 'error',
            });
        }
    };

    const handleDelete = async ({ id }) => {
        await deleteNote(id);

        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {notes.map((note) => (
                    <div item key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    );
}
