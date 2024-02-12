import { useState, useEffect } from "react"

const KEY = 'a55d4b56'

export function useMovieDetails(selectedId) {

  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  useEffect(function () {

    const controller = new AbortController()

    async function getMovieDetails() {
      try {

        setIsLoading(true)
        setMovie({})

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`, { signal: controller.signal })
        if (!res.ok) throw new Error("Something went wrong while fetching data");

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Movie not found");

        setMovie(data)

      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log(err.message);
          setError(err.message)
        }

      } finally {
        setIsLoading(false)
      }

    }
    getMovieDetails()

    // cleanup
    return function () {
      controller.abort()
    }
  }, [selectedId])


  return { movie, isLoading, error }
}



