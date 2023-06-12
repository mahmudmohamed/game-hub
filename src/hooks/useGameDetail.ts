import { useQuery } from "@tanstack/react-query"
import Game from "../entites/Game"

import APIClient from "../services/api-client"


const apiClinet = new APIClient<Game>(`/games`)

const useGame = (slug: string) => {

  return useQuery({
    queryKey: ['game-detail'],
    queryFn: () => apiClinet.get(slug)
  })
}

export default useGame