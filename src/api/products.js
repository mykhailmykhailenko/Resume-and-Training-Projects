const API_BASE = 'https://fakestoreapi.com/products';

export const getData = () => {
    return fetch(API_BASE)
    .then(response => response.json())
}
