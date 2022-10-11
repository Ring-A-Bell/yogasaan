export function getScore(reqdDict, obtdDict, frameNum) {
  let scoresum = 0;
  let ctr = 0;
  let maxDev = 0;

  for (let key in reqdDict) {
    if (obtdDict[key] && obtdDict[key] !== -1) {
      let deviation = Math.abs(obtdDict[key] - reqdDict[key]);
      
      let accuracy = 100 - (100 / 180) * deviation;
      ctr++;
      if (accuracy < 70 || accuracy > 100) {
        return 0;
      } else {
        scoresum += accuracy;
      }
    }
  }
  maxDev = 0;
  if (ctr === 0) return 0;
  if(scoresum/ctr>100)
    return (scoresum/ctr)%100;
  return scoresum / ctr;
}
