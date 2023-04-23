"use client";
import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import LoadingPage from "./loading";
import Header from "./components/Header";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch("/api/movies");
      const res = await data.json();
      setMovies(res);
      // wait 1 second
      // await new Promise((resolve) => setTimeout(resolve, 1000 ));
      setIsloading(false);
    };
    fetchMovies();
  }, []);

  if (isloading) {
    // <h2>Loading now...</h2>
    return <LoadingPage />;
  }
  return (
    <main>
      <Header getSearchResults={(results) => setMovies(results)}/>
      <Movies movies={movies} />
    </main>
  );
};
export default HomePage;
