import "./index.scss";
import Posenet from "react-posenet";
import { Suspense, useState, useEffect } from "react";
import { StorageImage, useFirestore, useFirestoreCollectionData, useFirestoreDocDataOnce } from "reactfire";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Navigate, useLocation } from "react-router";
import { checkJoints } from "../../utils/getAngles";
import { getMaxDev } from "../../utils/getMaxDev";
import { getScore } from "../../utils/getScore";
import { getDesc } from "../../utils/getDesc";
import Result from "../Result";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function Pose() {
    const query = new URLSearchParams(useLocation().search);
    const poseID = query.get("pid");
    const poseRef = useFirestore().collection("poses").doc(poseID);
    const pose = useFirestoreDocDataOnce(poseRef);

    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const [frames, setFrames] = useState(0);
    const [time, setTime] = useState(15);

    useEffect(() => {
        const Swal = withReactContent(swal);
        Swal.fire({
            html: (
            <p style={{ fontFamily: "Rubik, sans-serif", fontWeight: 300, textAlign: "center" }}>
                Click the start button and get ready with your pose.
                You will be scored on how closely you follow the pose.
                <br/><br/>
                Your pose will start getting scored when the timer reaches 10s.
                <br/>
                <br/><br/>
                <br/><br/>
                {getDesc(poseID)}
            </p>
            ),
            confirmButtonText: "Continue",
            confirmButtonColor: "#6b38fb",
        });
    }, []);

    const renderTime = ({remainingTime}) => {
        setTime(remainingTime);
        return (
            <div className="value">{remainingTime}</div>
        );
    }

    

    const handlePose = (p) => {
        if(p && start && p.length>0 && time<=10) {
            const ang = checkJoints(p[0]);
            const _score = getScore(pose.data?.angles, ang, frames);
            if(frames==30||frames==110||frames==200)
                getMaxDev(pose.data?.angles, ang, pose.data?.name);
            setScore(score + _score);
            setFrames(frames + 1);
        }
        if(time<=1)
            console.log("Performance (FPS) --> " + frames/8);
    };

    return (
        <Suspense fallback={<p>Loading</p>}>
            {!finish ? (
                <div className="pose">
                    <div className="pose_sample">
                        <div className="pose_title">{pose.data?.name}</div>
                        <br/>
                        <div className="pose_level">POSE LEVEL -{'>'} {pose.data?.level}</div>
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
                            {renderTime}
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
                        <Posenet onEstimate = { handlePose}/>
                    </div>
                </div>
            ) : (
                <Result
                    score={Math.floor(score/frames)}
                    isPose={true}
                    id={pose.data?.NO_ID_FIELD}
                    duration={10}
                    level={pose.data?.level}
                />
            )}
            
        </Suspense>
    );
}