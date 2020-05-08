import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-25371.firebaseio.com/'
});

export default instance;