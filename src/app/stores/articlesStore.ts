import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/newsSource";
export default class ArticleStore {
    articles: Article[] = [];
    filter:"All"|"Business"|"Entertainment"|"General"|"Health"|"Science"|"Sports"|"Technology" = "All";
    searchInput:string = '';
    currentArticle:Article|null = null;

    constructor() {
        makeAutoObservable(this);
    }

    listArticles = async () => {

        const results = this.filter === 'All' ? await agent.newsApi.getNews(this.searchInput || 'apple')
         : await agent.newsApi.getByCategory(this.filter,this.searchInput);
        runInAction(() => {
            this.articles = results.articles;
            console.log(results.articles)
        })
    }
    setSearchInput = (input:string) =>{
        console.log('setting')
        this.searchInput = input;
        runInAction(() =>{
            this.listArticles();

        })
    }
    getArticle = (index:number) =>{
        this.currentArticle =  this.articles[index];

    }
    setFilter = (filter:"All"|"Business"|"Entertainment"|"General"|"Health"|"Science"|"Sports"|"Technology" = "All") =>{
        this.filter = filter;
        runInAction(() =>{
            this.listArticles();
        })
    }
}