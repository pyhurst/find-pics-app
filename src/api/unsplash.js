import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tQnw0w3YeSjkihyETBf_vAurtvAhkZ3ewY0ZvT_rWAs'
    }
})