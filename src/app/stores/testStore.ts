import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
export default class TestStore {
    number:number = 0;

    constructor() {
        makeAutoObservable(this);
    }

   addNumber = () =>{
       this.number++;
   }
   decrease = () =>{
       this.number--;
   }
}