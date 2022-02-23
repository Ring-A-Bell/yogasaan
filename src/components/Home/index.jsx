import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import Card from "../Card";
import "./index.scss";

export default function Home() {
    const poseRef = useFirestore().collection("poses");
    console.log(poseRef);
    const poses = useFirestoreCollectionData(poseRef); 
    console.log(poses); 

    return (
        <Suspense>
            <div className="home">
                <div className="home_heading">Standalone Poses</div>
                <div className="card_container">
                    {poses.data?.map((pose) => {
                        <Card title={pose.name} onClick={()=>console.log("click")} path={pose.image_url?pose.image_url:""} />
                        
                    })}
                    <Card title="Sample" onClick="" path="poses/Staff.jpg" />
                    <Card title="Sample" onClick="" path="poses/Staff.jpg" />
                </div>
            </div>
        </Suspense>
    );
}