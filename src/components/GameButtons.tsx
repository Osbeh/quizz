import { Button } from "react-bootstrap";

type GameButtonProps = {
    gameControl: (answerText:string) => void,
    skipUsed: boolean,
    removeTwo: () => void,
    removeTwoUsed: boolean
}

export default function GameButtons({ gameControl, skipUsed, removeTwo, removeTwoUsed }:GameButtonProps) {
    return (
        <div style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
            <Button disabled={skipUsed} style={{width:"10rem"}} onClick={() => gameControl("skip")}>Skip</Button>
            <Button disabled={removeTwoUsed} style={{width:"10rem"}} onClick={() => removeTwo()}>Remove 2</Button>
        </div>
    )
}