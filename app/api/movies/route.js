import { NextResponse } from "next/server";
import movies from "./data.json"

const fetchMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  // wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await data.json();
//   console.log(res);
  return res;
}
  export async function GET(request) {
    const data = await fetchMovies();
    return NextResponse.json(data);
  }

// export async function GET(request){
//     return NextResponse.json(movies);
// }