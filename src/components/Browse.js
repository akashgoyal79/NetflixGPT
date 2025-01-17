import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () =>{
    const showGPtSearch = useSelector(store => store.gpt.showGPtSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcommingMovies();
    return (
        <div>
            <Header/>
            {
                showGPtSearch ? (<GptSearch/>): (
                    <>
                        <MainContainer/>
                        <SecondaryContainer/> 
                    </>
                )
            }
            
            
        </div>
    )
}
export default Browse