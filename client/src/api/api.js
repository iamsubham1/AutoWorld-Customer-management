import { getCookie } from "../utility/getCookie";

const baseUrl = "http://localhost:8080/api/"




export const login = async (credentials) => {

    try {
        const response = await fetch(`${baseUrl}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            credentials: 'include',
        })
        const data = await response.json();
        credentials = null;
        return data;

    } catch (error) {
        console.error('Network error:', error);
        credentials = null;
        return false;
    }

}

export const getAllEntries = async () => {
    try {

        const response = await fetch(`${baseUrl}service/getcarentries`, {
            headers: {
                'Content-Type': 'application/json',
                JWT: getCookie('JWT')
            }
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Network error:', error);
        return false;
    }
}

export const getAllUsers = async () => {
    try {

        const response = await fetch(`${baseUrl}admin/allUsers`, {
            headers: {
                'Content-Type': 'application/json',
                JWT: getCookie('JWT')
            }
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Network error:', error);
        return false;
    }
}