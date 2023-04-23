import './globals.css'

export const metadata = {
  title: 'NetMovies',
  description: 'Movies, list of latest movies, trending movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='sm:mx-10 mx-32 my-12'>{children}</body>
    </html>
  )
}
