import Link from "next/link";
import Image from "next/image";

const Movies = ({ movies }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="mx-4 my-12 grid gap-7 grid-cols-fluid flex items-center">
        {movies.map((movie) => {
          const { id, title, release_date, poster_path } = movie;
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h2>{release_date}</h2>
              <Link href={`/${id}`}>
                <Image
                  src={imagePath + poster_path}
                  alt={title}
                  width={800}
                  height={800}
                  priority
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
