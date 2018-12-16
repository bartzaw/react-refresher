import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 58fe113ec5ed697ddb8a376a3bbf634dab6613cb35467de6a54a904279408976',
    }
})