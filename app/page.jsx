import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );

  // wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await data.json();
  // console.log(res)
  return (
    <main>
      {/* <h1 className="text-center text-5xl py-5 mx-5">Net Movies</h1> */}
      <div className="mx-4 my-12 grid gap-10 grid-cols-fluid items-center">
        {res.results.map((movie) => {
          return (
            <div key={movie.id}>
              <Movie
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
