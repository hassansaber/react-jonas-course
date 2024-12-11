import { useEffect, useRef, useState } from "react"
import StarRating from "./StarRating"
import Loader from "./Loader"
import ErrorMessage from "./ErrorMessage"
import { useKey } from "./useKey"
import { useMovieDetails } from "./useMovieDetails"


const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {

  // ____________STATE_______________
  const [userRating, setUserRating] = useState(0)

  const { movie, isLoading, error } = useMovieDetails(selectedId)
  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId)
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating
  const countRef = useRef(0) // stored between rerenders
  const { Title: title,
    Released: released,
    Runtime: runtime,
    Poster: poster,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
    Year: year,
  } = movie


  // ________________Handler___________________
  function handleAdd() {

    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      countRatingDecision: countRef.current
    }

    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }



  // ________________Effect___________________

  useEffect(function () {
    if (userRating) countRef.current++
  }, [userRating])

  // page title
  useEffect(function () {
    if (!title) return
    document.title = `Movie | ${title}`

    return function () { document.title = 'usePopcorn' }
  }, [title])

  useKey("Escape", onCloseMovie)


  // ____________JSX_______________
  return (
    <div className="details">
      {isLoading && <Loader />}
      {(!isLoading && !error) &&
        <>
          <header>
            <button
              className="btn-back"
              onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt="" />
            <div className="details-overview">
              <h2 >{title}</h2>
              <p>{released} &bull; {runtime}</p>
              <p>{genre}</p>
              <p><span>⭐</span>{imdbRating} IMDB rating</p>
            </div>
          </header>
          <section >
            <div className="rating">
              {isWatched ?
                <p>You rated this movie {watchedUserRating}<span>⭐</span></p>
                :
                <>
                  <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                  {userRating > 0 && <button className="btn-add" onClick={handleAdd}>+ Add to list</button>}
                </>
              }
            </div>
            <p><em>{plot}</em></p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      }
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default MovieDetails