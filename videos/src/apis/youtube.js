import axios from 'axios'

const KEY = 'AIzaSyBZ7H2RLDXcQNBEwCwwt59tHFQCThHYe_Y'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: KEY,
     }

})