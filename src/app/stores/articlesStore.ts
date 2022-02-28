import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/newsSource";
export default class ArticleStore {
    articles: Article[] = [];
    filter: string = "All";
    searchInput: string = '';
    currentArticle: Article | null = null;
    initialLoading: boolean = true;
    loading: boolean = false;
    total: number = 0;
    currentPage: number = 1;
    constructor() {
        makeAutoObservable(this);
    }

    listArticles = async () => {
        if (this.currentPage === 0)
            this.initialLoading = true;
        else
            this.loading = true;
        try {
            const results = this.filter === 'All' ? await agent.newsApi.getNews(this.searchInput || 'a', this.currentPage)
                : await agent.newsApi.getByCategory(this.filter, this.searchInput, this.currentPage);
            runInAction(() => {
                this.currentPage++;
                this.articles = [...this.articles, ...results.articles];
                this.total = results.totalResults;
                if(this.initialLoading)this.initialLoading = false;
                if(this.loading)this.loading = false;
            })
        }
        catch (err) {
            runInAction(() => {
                if(this.initialLoading)this.initialLoading = false;
                if(this.loading)this.loading = false;

            })
        }
    }
    setSearchInput = (input: string) => {
        this.searchInput = input;
        runInAction(() => {
            this.listArticles();

        })
    }
    getArticle = (index: number) => {
        this.currentArticle = this.articles[index];

    }
    setFilter = (filter: string) => {
        this.filter = filter;
        this.currentPage = 1;
        this.articles = [];
        runInAction(() => {
            this.listArticles();
        })
    }
    clearResults = () => {
        this.currentPage = 1;
        this.articles = [];
    }
}