import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import '../index.css';
import { getAllNotes, deleteNote } from '../helpers/apiCalls';

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const { data } = await getAllNotes();
            setNotes(data);
        } catch (error) {
            console.log({ error });
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
