import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { useFirestoreCollectionData, useFirestore, useUser } from "reactfire";
import Card from "../Card";
import "./index.scss";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Home() {
    const poseRef = useFirestore().collection("poses");
    
    const poseRef2 = useFirestore().collection("poseflows");

    const userRef = useFirestore().collection("users");
    const { data:user } = useUser();

    useEffect(() => {
        userRef.doc(user.uid).set({
            name: user.displayName,
        });
    }, []);

    const Swal = withReactContent(swal);
    if (!localStorage.getItem("main"))
        Swal.fire({
        title: "LOGO",
        html: (
            <p style={{ fontFamily: "Rubik, sans-serif", fontWeight: 300 }}>
            Hey, {user.displayName}, <br />
            <br />
            Welcome to <b>Yogasaan</b>, Yoga made Asaan (easy :)) Practicing yoga
            from home was never easier!
            </p>
        ),
        didOpen: () => {
            localStorage.setItem("main", true);
        },
        confirmButtonText: "Continue",
        confirmButtonColor: "#6b38fb",
    });

    const poses = useFirestoreCollectionData(poseRef);
    const poses2 = useFirestoreCollectionData(poseRef2); 
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
                    <Card title="Sample 1" onClick={() => poses2.data[0].poses?.map((p) => (console.log(p)))} path="poses/health-thumb1621432876.jpg" />
                    <Card title="Sample 2" onClick={() => console.log(poses2.data[0].poses)} path="poses/health-thumb1621432876.jpg" />
                    <Card title="Sample 3" onClick={() => console.log("click")} path="poses/health-thumb1621432876.jpg" />
                </div>
            </div>
        </Suspense>
    );
}