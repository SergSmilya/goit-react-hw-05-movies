import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=ad2c844e7719e1ada80161a84523905b

// Маршрути
// У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

// Code Splitting (поділ коду)
// Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.

// propTypes
// Styled Components || CSS.module

// Ответ по каждому фильму с бека!

// adult: false;
// backdrop_path: '/ovM06PdF3M8wvKb06i4sjW3xoww.jpg';
// genre_ids: [878, 12, 28];
// id: 76600;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Avatar: The Way of Water';
// overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.';
// popularity: 3464.178;
// poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg';
// release_date: '2022-12-14';
// title: 'Avatar: The Way of Water';
// video: false;
// vote_average: 7.733;
// vote_count: 5999;

// В место <p></p> должен біть <Link to...>
