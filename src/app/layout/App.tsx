import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import FilterSection from "../../features/filters/FilterSection";
import NewsDashboard from "../../features/News/NewsDashboard";
import Test from "../../features/Test";
import agent from "../api/agent";
import { store } from "../stores/store";


export default function App() {

  // const nav = useNavigate();
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <>
          <FilterSection/>
          <NewsDashboard/>
          </>
        
        } />
         <Route path="/:articleId" element={
         <ArticlePage
        
        } />
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}
const NotFound = () =>{
  return <h2>Not found</h2>;

}
// function Users() {
//   return <h2>Users</h2>;
// }