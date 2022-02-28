import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Article } from "../models/newsSource";
export default class ArticleStore {
    articles: Article[] = [];
    filter:string = "All";
    searchInput:string = '';
    currentArticle:Article|null = null;
    initialLoading:boolean = true;
    total:number = 0;
    currentPage:number = 1;
    constructor() {
        makeAutoObservable(this);
    }

    listArticles = async () => {

        this.initialLoading = true;
        try{
        const results = this.filter === 'All' ? await agent.newsApi.getNews(this.searchInput || 'a',this.currentPage)
         : await agent.newsApi.getByCategory(this.filter,this.searchInput,this.currentPage);
        runInAction(() => {
            this.currentPage++;
            this.articles = [...this.articles,...results.articles];
            this.total = results.totalResults;
            this.initialLoading = false;
        })
    }
    catch(err){
        runInAction(() =>{
            this.initialLoading = false;
        })
    }
    }
    setSearchInput = (input:string) =>{
        this.searchInput = input;
        runInAction(() =>{
            this.listArticles();

        })
    }
    getArticle = (index:number) =>{
        this.currentArticle =  this.articles[index];

    }
    setFilter = (filter:string) =>{
        this.filter = filter;
        this.currentPage = 1;
        this.articles=[];
        runInAction(() =>{
            this.listArticles();
        })
    }
    clearResults = () =>{
        this.currentPage = 1;
        this.articles = [];
    }
}