import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common['Authorization'] = 'Bearer TOEKN FROM INSTANCE'

export default instance;