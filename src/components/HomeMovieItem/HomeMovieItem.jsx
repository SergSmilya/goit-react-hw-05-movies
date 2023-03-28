export default function HomeMovieItem({ children }) {
  return (
    <li>
      <p>{children}</p>
    </li>
  );
}

// В место <p></p> должен біть <Link to...>
