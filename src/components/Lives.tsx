import Heart from "./Heart"

type LivesProps = {
    lives:number
}

export default function Lives({ lives }:LivesProps) {
    const livesArray = [
        ...Array(lives),
      ]
    return(

        livesArray.map((value: undefined, index: number) => (
            <Heart key={index}/>
          ))
    )
}