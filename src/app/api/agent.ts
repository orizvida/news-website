import axios, { AxiosError, AxiosResponse } from 'axios'
import NewsSourceResponse, { filter } from '../models/newsSource';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'https://newsapi.org/v2';
axios.interceptors.request.use(async (config:any) => {
    return config;
})
axios.interceptors.response.use(async (response:any) => {
    if (process.env.NODE_ENV === 'development')
        await sleep(200);

    return response;

}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            if (data.message) {
                throw data.message;
            }
            break;
    }
    return Promise.reject(error);
}
)

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body, { withCredentials: true }).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body, { withCredentials: true }).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url, { withCredentials: true }).then(responseBody),
}


const newsApi = {
    getNews: (searchInput:string,currentPage:number) => request.get<NewsSourceResponse>(`/everything?q="${searchInput}"&page=${currentPage}&apiKey=d05503cdf43d4be2b90bbb7556bc1fdd`),
    getByCategory: (cat:string,searchInput:string,currentPage:number) => request.get<NewsSourceResponse>(`/top-headlines?category=${cat}&page=${currentPage}&q=${searchInput}&apiKey=d05503cdf43d4be2b90bbb7556bc1fdd`)
}

const agent = {
    newsApi
}

export default agent;