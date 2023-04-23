import { NextResponse } from "next/server";


const fetchMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  // wait 1 second
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await data.json();
  //   console.log(res);
  return res.results;
};

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const data = await fetchMovies();

    // console.log(searchParams);  // To get all the parameters
    // console.log(searchParams.get('age')); // To get a particular parameter
    
    const query = searchParams.get('query');
    const filteredMovies = data.filter((movie)=>{
      return movie.title.toLowerCase().includes(query.toLowerCase());
    })
  return NextResponse.json(filteredMovies);
}
