import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/newsSource";
export default class ArticleStore {
    articles: Article[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    listArticles = async () => {
        const results = await agent.newsApi.getNews();
        runInAction(() => {
            this.articles = results.articles;
        })
    }
}