import { useState, useEffect } from "react";

const KEY = "4ee2d14e";

export function useMovies(query) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoding] = useState(false);
	const [error, setError] = useState("");
	useEffect(
		function () {
			// callback?.();

			const controller = new AbortController();
			async function fetchMovies() {
				try {
					setIsLoding(true);
					setError("");

					const res = await fetch(
						`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
						{ signal: controller.signal }
					);

					if (!res.ok)
						throw new Error("Something went wrong with fetching movies");

					const data = await res.json();

					if (data.Response === "False") throw new Error("Movie not found");

					setMovies(data.Search);
					setError("");
					// console.log(data.Search);
				} catch (err) {
					if (!err.name !== "AbortError") {
						setError(err.message);
					}
				} finally {
					setIsLoding(false);
				}
			}
			if (query.length < 3) {
				setMovies([]);
				setError("");
				return;
			}

			// handleCloseMovie();
			fetchMovies();

			return function () {
				controller.abort();
			};
		},
		[query]
	);

	return { movies, isLoading, error };
}
