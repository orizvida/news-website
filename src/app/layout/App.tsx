import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import FilterSection from "../../features/filters/FilterSection";
import ArticlePage from "../../features/News/ArticlePage";
import NewsDashboard from "../../features/News/NewsDashboard";



export default function App() {

  // const nav = useNavigate();
  return (
    <div className="page-header">

      <Routes>
        <Route path="/" element={
          <>
          <FilterSection/>
          <NewsDashboard/>
          </>
        
        } />
         <Route path="/article" element={
         <ArticlePage/>
        
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