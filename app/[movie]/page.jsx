import { Suspense } from "react";
import MovieDetail from "../components/MovieDetail";

const Movie = ({ params }) => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              flexDirection: "column",
            }}
            className="flex item-center justify-center"
          >
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
