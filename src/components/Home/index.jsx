import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { useFirestoreCollectionData, useFirestore, useUser } from "reactfire";
import Card from "../Card";
import "./index.scss";

export default function Home() {
    const poseRef = useFirestore().collection("poses");

    const userRef = useFirestore().collection("users");
    const { data:user } = useUser();

    useEffect(() => {
        userRef.doc(user.uid).set({
            name: user.displayName,
        });
    }, []);

    const poses = useFirestoreCollectionData(poseRef); 
    const navigate = useNavigate();

    return (
        <Suspense>
            <div className="home">
                <div className="home_heading">Standalone Poses</div>
                <div className="card_container">
                    {poses.data?.map((pose) => (
                        <Card title={pose.name} onClick={() => navigate(`pose?pid=${pose.NO_ID_FIELD}`)} path={pose.image_url} key={pose.NO_ID_FIELD}/>
                    ))}
                </div>

                <br/><br/>
                <hr/>
                <br/><br/>

                <div className="home_heading">Pose Flows</div>
                <div className="card_container">
                    <Card title="Sample 1" onClick={() => console.log("click")} path="poses/health-thumb1621432876.jpg" />
                    <Card title="Sample 2" onClick={() => console.log("click")} path="poses/health-thumb1621432876.jpg" />
                    <Card title="Sample 3" onClick={() => console.log("click")} path="poses/health-thumb1621432876.jpg" />
                </div>
            </div>
        </Suspense>
    );
}