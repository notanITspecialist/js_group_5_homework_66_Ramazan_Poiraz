import axios from 'axios';

const axiosDog = axios.create({
   baseURL: 'https://random.dog/woof.json'
});

export default axiosDog