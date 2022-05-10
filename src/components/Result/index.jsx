import { findAllByAltText } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFirestore, useUser } from "reactfire";
import "./index.scss";

export default function Result ({score, isPose, id, duration, level}) {

    const navigate = useNavigate();
    const { data:user } = useUser();
    const histref = useFirestore().collection("history");

    const [ working, setWorking ] = useState(true);

    useEffect(() => {
        async function storeResult() {
            setWorking(true);
            const data = {
                score,
                isPose,
                id,
                duration,
                uid: user.uid,
                level,
            };
            await histref.add(data);

            setWorking(false);
        }
        storeResult();
    }, []);


    return (
        <div className={"result_container"}>
            <div className={"result"}>
                <div className={"user"}>{user.displayName}</div>
                <div className={"result_score"}>+{score}</div>
            </div>
            {!working ? (
                <div
                className={"continue_button"}
                tabIndex={0}
                onClick={() => navigate("/")}
                >
                Continue
                </div>
            ) : (
                <div className={"processing"} tabIndex={-1}>
                Processing Result
                </div>
            )}
        </div>
    );
}