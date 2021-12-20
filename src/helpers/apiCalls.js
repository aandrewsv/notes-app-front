import axios from 'axios';

const NOTES_BASE_URL = 'http://localhost:8000/api/notes/';

export async function getAllNotes() {
    let response = await axios.get(NOTES_BASE_URL);
    return response;
}

export async function getOneNote(id) {
    let response = await axios.get(`${NOTES_BASE_URL}${id}/`);
    return response;
}

export async function updateNote(id, body) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    await axios.put(`${NOTES_BASE_URL}${id}/`, body, options);
}

export async function deleteNote(id) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    await axios.delete(`${NOTES_BASE_URL}${id}/`, options);
}
