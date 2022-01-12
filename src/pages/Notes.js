import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import '../index.css';
import { deleteNote } from '../helpers/apiCalls';
import axios from 'axios';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const BASE_URL = process.env.REACT_APP_API_URL;

    const getNotes = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('access')}`,
                },
            };
            const { data } = await axios.get(`${BASE_URL}/api/notes/`, config);
            setNotes(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async ({ id }) => {
        try {
            const config = {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('access')}`,
                },
            };
            await axios.delete(`${BASE_URL}notes/${id}/`, config);
        } catch (error) {
            console.log(error);
        }

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
