import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();
    const upcommingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcommingMovies(json.results));
    }
    useEffect(() => {
        upcommingMovies();
    },[])
}
export default useUpcommingMovies;