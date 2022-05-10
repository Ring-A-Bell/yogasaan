import Leaderboard from "../Leaderboard";
import Chart from "../Chart";
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LineChart from "../LineChart";
import "./index.scss";

export default function Stats() {

    /*useEffect(() => {
        const Swal = withReactContent(swal);
        Swal.fire({
            html: (
            <p style={{ fontFamily: "Rubik, sans-serif", fontWeight: 300 }}>
                The more difficult the pose level, the higher the contribution to the score.
                <br></br>
                <br></br>
                <br></br>
                Want to improve your total score?
                <br></br>
                Attempt a Level 3 Pose ;{')'}
            </p>
            ),
            confirmButtonText: "Got It",
            confirmButtonColor: "#6b38fb",
        });
    }, []);*/

    return (
        <div>
            <div className="stats">
            <div className="section">
                <div className="heading">Analytics</div>
                <Chart />
                <div className="description">
                    The chart compares your total score while attempting different poses.
                </div>
            </div>
            <div className="section">
                <div className="heading">Leaderboard</div>
                <Leaderboard />
            </div>
        </div>
        <div className="section">
            <div className="heading"></div>
            <LineChart />
        </div>
        </div>
    );
}