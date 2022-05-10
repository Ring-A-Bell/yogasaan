export function getMaxDev(reqdDict, obtdDict, poseName) {
  let maxDev = 0;
  let devAngle = "";

  for (let key in reqdDict) {
    if (obtdDict[key] && obtdDict[key] !== -1) {
      let deviation = Math.abs(obtdDict[key] - reqdDict[key]);

      if(deviation > maxDev) {
          maxDev = deviation;
          devAngle = key;
      }
    }
  }
  
  if(poseName==="Mountain Pose" && devAngle==="leftKneeAngle")
    console.log("Straighten Your Left Leg");
  else if(poseName==="Mountain Pose" && devAngle==="rightKneeAngle")
    console.log("Straighten You Right Leg");
  else if(poseName==="Mountain Pose" && devAngle==="rightHipAngle")
    console.log("Stand straight, don't lean sideways");
  else if(poseName==="Mountain Pose" && devAngle==="leftHipAngle")
    console.log("Stand straight, don't lean sideways");
  else if(poseName==="Mountain Pose" && devAngle==="leftShoulderAngle")
    console.log("Keep your left hand slightly closer to your body");
  else if(poseName==="Mountain Pose" && devAngle==="rightShoulderAngle")
    console.log("Keep your right hand slightly closer to your body");
  else if(poseName==="Mountain Pose" && devAngle==="leftElbowAngle")
    console.log("Don't bend your left Elbow");
  else if(poseName==="Mountain Pose" && devAngle==="rightElbowAngle")
    console.log("Don't bend your right Elbow");
}
  