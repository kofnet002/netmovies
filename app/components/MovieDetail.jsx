import Image from "next/image";

const MovieDetail = async ({ params }) => {
  // console.log(params)
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res);

  return (
    <div className="m-7">
      <h2 className="text-2xl">{res.title}</h2>
      <div className="flex items-center">
        {res.genres.map((gen) => {
          return (
            <h2 className="text-sm text-bold mr-3 bg-red-600 my-2 py-1 px-2 rounded">
              {gen.name}
            </h2>
          );
        })}
      </div>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>
        <span className="font-black">Runtime: </span>
        {res.runtime} minutes
      </h2>
      <h2>Vote counts: {res.vote_count}</h2>
      <h2>Budget: {res.budget}</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + res.backdrop_path}
        alt={res.title}
        height={1000}
        width={1000}
        priority
      />
      <h2 className="bg-red-600 inline-block px-5 py-2 my-3 rounded">
        Synopsis
      </h2>
      <p>{res.overview}</p>
    </div>
  );
};

export default MovieDetail;
