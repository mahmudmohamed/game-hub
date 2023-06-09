import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'befe69d7d19745a088dc4dc9c9af0276'
    }
})