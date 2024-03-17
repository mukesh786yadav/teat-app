import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import SearchMovie from "./Pages/Search/SearchMovie.js";
import SingleMovieDetails from "./Pages/Single-movie/SingleMovieDetails.js";
import TopRatedMovie from "./Pages/Top-rated/TopRatedMovie.js";
import UpcomingMovie from "./Pages/Upcoming-movie/UpcomingMovie.js";
import Header from "./Components/Header/index.js";

import { SearchProvider } from "./Hooks/ContextApi.js";

function App() {
  return (
    <>
      {/* <Route></Route> */}
      <BrowserRouter>
        <SearchProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/search-movie" element={<SearchMovie />}></Route>
            <Route path="/movie/:id" element={<SingleMovieDetails />}></Route>
            <Route path="/top-rated-movie" element={<TopRatedMovie />}></Route>
            <Route path="/upcoming-movie" element={<UpcomingMovie />}></Route>
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
