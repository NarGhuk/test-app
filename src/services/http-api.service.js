import axios from "axios";
const apiBase = 'https://app.highattendance.com/';
export async function get(url) {
    const response =  await axios.get(`${apiBase}${url}`);
    return response.data
}
