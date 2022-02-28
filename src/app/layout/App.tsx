import {
  Routes,
  Route,
} from "react-router-dom";
import ArticlePage from "../../features/News/ArticlePage";
import MainNewsPage from "../../features/News/MainNewsPage";



export default function App() {

  // const nav = useNavigate();
  return (
    <div className="page-header">

      <Routes>
        <Route path="/" element={
          <>
          <MainNewsPage/>
          </>
        
        } />
         <Route path="/article/:id" element={
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