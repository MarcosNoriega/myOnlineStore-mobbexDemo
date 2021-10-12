import HttpClient from './HttpClient.interface';
import axios from 'axios';

class AxiosAdapter implements HttpClient {
    async post(url: string, data: object, headers: object) {
        const res: object = await axios.post(url, data, headers);

        return res;
    }
}

export default AxiosAdapter;