import genres from "../data/genres"
import { FetchResponse } from "./useData"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"


export interface Genre {
    id: number,
    name: string
    image_background: string
}

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
        staleTime: 24 * 60 * 10 * 1000, // 24h
        initialData: { count: genres.length, results: genres }
    })
}


export default useGenres