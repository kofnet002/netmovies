import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "NetMovies",
  description: "Movies, list of latest movies, trending movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
