export type ScoreProps = {
    name: string,
    score: number
}

export default function Score({ name, score }: ScoreProps){
    return (
        <li>{name} : {score}</li>
    )
}