import genres from "../data/genres"
import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number,
    name: string
    image_background: string
}

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 10 * 1000, // 24h
        initialData: { count: genres.length, results: genres }
    })
}


export default useGenres