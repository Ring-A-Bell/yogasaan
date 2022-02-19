import "./index.scss";
import Posenet from "react-posenet";
import { Suspense, useState } from "react";
import { StorageImage, useFirestore, useFirestoreDocData } from "reactfire";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Navigate, useLocation } from "react-router";
import { checkJoints } from "../../utils/getAngles";


export default function Pose() {
    const query = new URLSearchParams(useLocation().search);
    const poseID = query.get("pid");
    const poseRef = useFirestore().collection("poses").doc(poseID);
    const pose = useFirestoreDocData(poseRef);

    const [start, setStart] = useState(false);
    const [finished, setFinish] = useState(false);

    return (
        <Suspense fallback="Loading">
            {finished && <Navigate to="/poseResult" />}
            <div className="pose">
                <div className="pose_sample">
                    <div className="pose_title">{pose.data?.name}</div>
                    <StorageImage 
                        storagePath={pose.data?.image_url}
                        className="pose_sample"
                        alt="sample pose"
                    />
                    <div className={"timer"}>
                        <CountdownCircleTimer
                        onComplete={() => setFinish(true)}
                        isPlaying={start}
                        duration={15}
                        colors={[
                            ["#afa5ff", 0.33],
                            ["#F7B801", 0.33],
                            ["#A30000", 0.33],
                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                    </div>

                    <div
                        className={`start_button ${start ? "disabled" : ""}`}
                        tabIndex={start ? -1 : 0}
                        onClick={() => setStart(true)}
                    >
                        Start
                    </div>
                </div>

                <div className="pose_actual">
                    npm start<Posenet onEstimate = { poses => { console.log(checkJoints(poses[0]))}} />
                </div>
            </div>
        </Suspense>
    );
}