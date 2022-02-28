import axios, { AxiosError, AxiosResponse } from 'axios'
import NewsSourceResponse from '../models/newsSource';


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
    getNews: (searchInput:string) => request.get<NewsSourceResponse>(`/everything?q="${searchInput}"&apiKey=8dc0370400a54c69b54756040ea0af0a`),
    getByCategory: (cat:"All"|"Business"|"Entertainment"|"General"|"Health"|"Science"|"Sports"|"Technology",searchInput:string) => request.get<NewsSourceResponse>(`/top-headlines?country=us&category=${cat}&q=${searchInput}&apiKey=8dc0370400a54c69b54756040ea0af0a`)
}

const agent = {
    newsApi
}

export default agent;