import Image from "next/image";

const MovieDetail = async ({ params }) => {
  // console.log(params)
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
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
      <p>{res.overview}</p>
    </>
  );
};

export default MovieDetail;
