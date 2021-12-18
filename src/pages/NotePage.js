import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// styles
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';

const NotePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const getNote = async () => {
            if (id === 'new') return;
            let { data } = await axios.get(`/api/notes/${id}`);
            setNote(data);
        };

        getNote();
    }, [id]);

    const createNote = async () => {
        const options = {
            headers: { 'Content-Type': 'application/json' },
        };
        await axios.post(`/api/notes/`, { body: note.body }, options);
    };

    const updatenote = async () => {
        if (id === 'new') return;
        const options = {
            headers: { 'Content-Type': 'application/json' },
        };
        await axios.put(`/api/notes/${id}/`, { body: note.body }, options);
    };

    const deleteNote = async () => {
        const options = {
            headers: { 'Content-Type': 'application/json' },
        };
        await axios.delete(`/api/notes/${id}/`, options);
        navigate('/');
    };

    const handleSubmit = () => {
        if (id !== 'new' && note.body === '') {
            deleteNote();
        } else if (id !== 'new') {
            updatenote();
        } else if (id === 'new' && note !== null) {
            createNote();
        }

        // little timeout to give time for the backend to update before loading the page
        navigate('/');
    };

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {id !== 'new' ? (
                    <button>
                        <Delete onClick={deleteNote} />
                    </button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea
                onChange={(e) => {
                    setNote({ ...note, body: e.target.value });
                }}
                value={note?.body}
            ></textarea>
        </div>
    );
};

export default NotePage;
