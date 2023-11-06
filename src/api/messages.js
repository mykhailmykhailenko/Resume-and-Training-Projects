const API = 'https://dummyjson.com/comments';

export const getMessages = () => {
   return fetch(API).then(res => res.json())
}