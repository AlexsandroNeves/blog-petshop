import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async (setDado) => {
    const reposta = await api.get('/posts')
    setDado(reposta.data);

}