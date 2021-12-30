import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

export async function register(formData) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    try {
        let response = await axios.post(
            `${BASE_URL}signup/`,
            formData,
            options,
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}

export async function getAllNotes() {
    let response = await axios.get(BASE_URL);
    return response;
}

export async function getOneNote(id) {
    let response = await axios.get(`${BASE_URL}notes/${id}/`);
    return response;
}

export async function updateNote(id, body) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    await axios.put(`${BASE_URL}notes/${id}/`, body, options);
}

export async function deleteNote(id) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    await axios.delete(`${BASE_URL}notes/${id}/`, options);
}
