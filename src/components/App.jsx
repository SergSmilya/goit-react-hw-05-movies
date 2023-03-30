import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import Movie from './Movie/Movie';
import MovieDetails from 'pages/MovieDetails';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movId" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// Code Splitting (поділ коду)
// Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.

// Спробувати модифікувати Api під різні запити
// Додати обробку помилок до компонентів
// https://api.themoviedb.org/3/movie/550?api_key=ad2c844e7719e1ada80161a84523905b
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
