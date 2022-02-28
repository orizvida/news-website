import {createContext, useContext} from "react";
import ArticleStore from "./articlesStore";



interface Store{
articleStore:ArticleStore;
}

export const store: Store = {
    articleStore : new ArticleStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}