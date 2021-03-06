import Chart from "../Chart";
import Leaderboard from "../Leaderboard";
import "./index.scss";

export default function Stats() {
  return (
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
  );
}
