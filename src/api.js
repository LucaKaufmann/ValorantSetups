import axios from 'axios';

const token = 't8uuUlrOjOZzkR7nYcDSCMwrucR3nEung17NsPGyd8E';

const httpClient = axios.create({
//   baseURL: 'https://raw.githubusercontent.com/LucaKaufmann/video-data/master/v2/data.json',
    baseURL: 'https://sandbox.howtojsonapi.com/',
    headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: 'Bearer ${token}',
  },
});