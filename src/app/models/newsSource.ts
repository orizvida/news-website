export default interface NewsSourceResponse{
    status:string;
    totalResults:number;
    articles:Article[];

}
export interface Article{
    source:{
        id:string;
        name:string;
    }
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string
    publishedAt:string;
    content:string;
} 
export type filter = "All"|"Business"|"Entertainment"|"General"|"Health"|"Science"|"Sports"|"Technology";
export const filterOptions = ["All","Business","Entertainment","General","Health","Science","Sports","Technology"];