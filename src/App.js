import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage/Homepage';
import Layout from './layout/Layout';
import Moviespage from './page/Moviespage/Moviespage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './page/NotFoundpage/NotFoundPage';
import MovieDetailPage from"./page/MovieDetailPage/MovieDetailPage"


//홈페이지 => 레이아웃 , 베너, 무비 슬라이드(popular, top rated, Upcoming)
//무비페이지 => 필터, 영화검색 내용 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='/movies'>
            <Route index element={<Moviespage/>}></Route>
            <Route path=':id' element={<MovieDetailPage/>}></Route> 
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
