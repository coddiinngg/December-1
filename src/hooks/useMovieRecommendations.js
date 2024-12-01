import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieRecommendation = ({id})=>{
    return api.get(`/movie/${id}/recommendations`)
}

export const useMovieRecommendations = ({id})=>{
    return useQuery({
        queryKey:["movie-recommendation", id],
        queryFn : ()=>fetchMovieRecommendation({id}),
        select :(result)=>(result.data),
        staleTime:300000
    })
}