import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout.jsx';
import Home from './pages/home/Home';
import MovieList from './components/movielist/MovieList.jsx';
import Movie from './pages/home/moviedetail/Movie.jsx';

const router = createBrowserRouter([
  {path: "/",
  element : <AppLayout />,
  children : [
    {
      index: true ,element : <Home />
    },
    {
      path: "movie/:id" ,element : <Movie />
    },
    {
      path: "movies/:type" ,element : <MovieList />
    },
    {
      path: "/*" ,element : <h1>Error page</h1>
    },

  ]},
]);



export default router;