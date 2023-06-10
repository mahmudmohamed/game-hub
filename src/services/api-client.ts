import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    count: number,
    results: T[]
}

const api = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'befe69d7d19745a088dc4dc9c9af0276'
    }
})


class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return api.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}

export default APIClient