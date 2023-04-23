import { Suspense } from "react";
import MovieDetail from "../components/MovieDetail";

const Movie = ({ params }) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex item-center justify-center">
            Loading movie...
          </div>
        }
      >
        <MovieDetail params={params} />;
      </Suspense>
    </>
  );
};

export default Movie;
