import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

export async function appLogin(formData) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.post(`${BASE_URL}signin/`, formData, options);
    return response;
}
export async function appLogout() {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    await axios.post(`${BASE_URL}signout/`, options);
}
export async function appRegister(formData) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.post(`${BASE_URL}signup/`, formData, options);
    return response;
}

export async function appUserView() {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.get(`${BASE_URL}user/`, options);
    return response.data;
}

export async function createNote(formData) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.post(`${BASE_URL}notes/`, formData, options);
    return response;
}

export async function getAllNotes() {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.get(`${BASE_URL}notes/`, options);
    return response;
}

export async function getOneNote(id) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    let response = await axios.get(`${BASE_URL}notes/${id}/`, options);
    return response;
}

export async function updateNote(id, body) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    await axios.put(`${BASE_URL}notes/${id}/`, body, options);
}

export async function deleteNote(id) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    await axios.delete(`${BASE_URL}notes/${id}/`, options);
}
