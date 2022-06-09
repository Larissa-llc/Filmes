
import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTRmMTM2OWMxZTNhMTFiYzBlMmYwMjA0MTcxMWRmNiIsInN1YiI6IjYyYTEzY2I2MTEzMGJkMzQ0NTMzYjc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yE8SF_jb3oYwZ3bQyURm-d0AzUsBHj1P0x8n73vfjPE'
    }
})
export default apiFilmes