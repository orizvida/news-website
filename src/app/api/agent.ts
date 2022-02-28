import axios, { AxiosError, AxiosResponse } from 'axios'
import NewsSourceResponse from '../models/newsSource';

//Preferable to put in an env file but at this moment we will put it here.
const apiKey = "0d26aac586374b11bc6abe8feef02831"
axios.defaults.baseURL = 'https://newsapi.org/v2';

axios.interceptors.response.use(async (response:any) => {
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
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}


const newsApi = {
    getNews: (searchInput:string,currentPage:number) => request.get<NewsSourceResponse>(`/everything?q="${searchInput}"&page=${currentPage}&apiKey=${apiKey}`),
    getByCategory: (cat:string,searchInput:string,currentPage:number) => request.get<NewsSourceResponse>(`/top-headlines?category=${cat}&page=${currentPage}&q=${searchInput}&apiKey=${apiKey}`)
}

const agent = {
    newsApi
}

export default agent;