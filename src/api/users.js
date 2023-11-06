const API_BASE = 'https://randomuser.me/api/';

export const getUsers = ({results = 10, page = 1}) => {
    return fetch (`${API_BASE}?results=${results}&page=${page}&seed=fd2023`)
    .then (response => response.json())
}