import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import Card from "../Card";
import "./index.scss";

export default function Home() {
    const poseRef = useFirestore().collection("poses");
    const poses = useFirestoreCollectionData(poseRef); 

    return (
        <Suspense>
            <div className="home">
                <div className="home_heading">Standalone Poses</div>
                <div className="card_container">
                    {poses.data?.map((pose) => (
                        <Card title={pose.name} onClick={() => console.log("click")} path={pose.image_url} />
                    ))}
                    <Card title="Warrior 2 Pose" onClick="" path="poses/Warrior2.jpg"/>
                </div>
            </div>
        </Suspense>
    );
}