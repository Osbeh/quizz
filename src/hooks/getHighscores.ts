import { useQuery } from "@tanstack/react-query";
import { getHighScores } from "../api/highscore";

export default function highscoreQuery() {

    return useQuery({
        queryKey: ["highscore"],
        queryFn: () => getHighScores(),
        refetchOnWindowFocus:false
      })
}