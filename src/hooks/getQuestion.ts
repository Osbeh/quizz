import { useQuery } from "@tanstack/react-query";
import { getOneQuestion } from "../api/questions";

export default function questionQuery(refetch:string, count:number) {

  const difficulty = count<5?"easy" : count<10 ? "medium" : "hard"

    return useQuery({
        queryKey: ["question", refetch],
        queryFn: () => getOneQuestion(difficulty),
        refetchOnWindowFocus:false
      })
}