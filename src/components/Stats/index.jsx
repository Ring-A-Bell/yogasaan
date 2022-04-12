import Leaderboard from "../Leaderboard";
import Chart from "../Chart";
import "./index.scss";

export default function Stats() {
    return (
        <div className="stats">
            <div>
                <div className="heading">Leaderboard</div>
                <Leaderboard />
            </div>
            <div>
                <Chart /> 
            </div>
        </div>
    );
}