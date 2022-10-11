import { Line } from "@reactchartjs/react-chart.js";
import { useEffect, useState } from "react";
import { useFirestoreCollectionData, useUser, useFirestore } from "reactfire";
import _ from "lodash";
import "./index.scss";

export default function LineChart() {
    
    const histRef = useFirestore().collection("history").where("uid","==",useUser().data.uid);
    
    const docs = useFirestoreCollectionData(histRef);
    const poseRef = useFirestore().collection("poses");
    const pdocs = useFirestoreCollectionData(poseRef);

    const [data, setData] = useState({});
    const [poseID, setPoseID] = useState("uQKKiXnUZHFf8iuMRuGb");
    const [poseName, setPoseName] = useState("Mountain Pose");

    useEffect(() => {
        const res = [];
        console.log("called useffect");
        docs.data?.forEach((doc) => {
            if(doc.id===poseID) 
                res.push({ pid: "", score: doc.score });
        });
        const labels = _.map(res, "pid");
        const _data = _.map(res, "score");

        const resData = {
            labels: labels,
            datasets: [
                {
                    label: "Score",
                    data: _data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        };
        setData(resData);
    }, [docs.data, pdocs.data]);


    function updatePose(x) {
        setPoseID(x);
        console.log("updated state");
        console.log(poseID);
        random();
    }

    function random() {
        const res = [];
        console.log("called random");
        docs.data?.forEach((doc) => {
            if(doc.id===poseID) 
                res.push({ pid: "", score: doc.score });
        });
        const labels = _.map(res, "pid");
        const _data = _.map(res, "score");

        const resData = {
            labels: labels,
            datasets: [
                {
                    label: "Score",
                    data: _data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 3,
                },
            ],
        };
        setData(resData);
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    };


    return (
        <div>
            <Line data={data} options={options} />
            <p>{poseName}</p>
            <div className="choice">
                <text onClick={() => {updatePose("uQKKiXnUZHFf8iuMRuGb"); setPoseName("Mountain Pose");}}>Mountain</text>
                <text onClick={() => {updatePose("GalUkpGYVg34PfalkuTE"); setPoseName("Warrior 2 Pose");}}>Warrior 2</text>
                <text onClick={() => {updatePose("bsn0ppCqhVWuJZE5sQpB"); setPoseName("Warrior 3 Pose");}}>Warrior 3</text>
                <text onClick={() => {updatePose("R7G6tzbjRhmzDnRXTmr5"); setPoseName("Half Moon Pose");}}>Half Moon</text>
                <text onClick={() => {updatePose("T7w6b8wlLMj8qzyUzdwZ"); setPoseName("Tree Pose");}}>Tree</text>
                <text onClick={() => {updatePose("1Cn2jCnvytlIVTfBL7MP"); setPoseName("Staff Pose");}}>Staff</text>
                <text onClick={() => {updatePose("bzxZO3me2gvQUdobGuoZ"); setPoseName("Easy Pose");}}>Easy</text>
                <text onClick={() => {updatePose("NdqzUSOSw4aSF5Spo9ZJ"); setPoseName("Cow Pose");}}>Cow</text>
            </div>
        </div>
    );   
}