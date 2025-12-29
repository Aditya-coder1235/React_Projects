import { useEffect } from "react";
import { fetchPhotos, fetchGif, fetchVideos } from "../api/mediaApi";
import {
    setQuery,
    setLoading,
    setError,
    setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector(
        (store) => store.search
    );

   

    useEffect(()=>{
        if(!query)return 
         const getData = async () => {
            try {
                dispatch(setLoading())
                 let data = [];
                 if (activeTab === "photos") {
                     let res = await fetchPhotos(query);
                     data = res.results.map((items) => ({
                         id: items.id,
                         type: "photo",
                         title: items.alt_description,
                         thumbnail: items.urls.small,
                         src: items.urls.full,
                     }));
                 }
                 if (activeTab === "videos") {
                     let res = await fetchVideos(query);
                     data = res.videos.map((items) => ({
                         id: items.id,
                         type: "video",
                         title: items.user.name || "video",
                         thumbnail: items.image,
                         src: items.video_files[0].link,
                     }));
                 }
                 if (activeTab === "GIF") {
                     let res = await fetchGif(query);
                     data = res.results.map((items) => ({
                         id: items.id,
                         type: "GIF",
                         title: items.title || "GIF",
                         thumbnail: items.media_formats.tinygif.url,
                         src: items.media_formats.gif.url,
                     }));
                 }

                 dispatch(setResults(data));
                
            } catch (error) {
                dispatch(setError(error.message))
            }
            
         };
        getData()
    },[query,activeTab])

    if(error)return <h1>Error..</h1>
    if(loading)return <h1>Loading....</h1>;

    return (
        <div className="flex justify-between w-full flex-wrap gap-2 overflow-auto px-10">
           {results.map((item,idx)=>{
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>; 
           })}
        </div>
    );
};

export default ResultGrid;
