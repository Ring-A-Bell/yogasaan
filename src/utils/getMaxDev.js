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
  
  if(poseName==="Staff Pose") {
    if(devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Make sure your Elbows aren't bent"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sit upright, with a straight back"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Extend knees fully"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Place hands slightly behind you"));
  }

  else if(poseName==="Hero Pose") {
    if(devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Make sure your Elbows aren't bent"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sit upright, with a straight back"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Fold knees properly"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Place palms on your knees"));
  }

  else if(poseName==="Four Limbed Staff Pose") {
    if(devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Try not to bend your elbows"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten back and extend legs"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your knees"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Keep shoulder in line with your hip"));
  }

  else if(poseName==="Warrior 2 Pose") {
    if(devAngle==="leftElbowAngle"||devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Make sure your Elbows aren't bent"));
    else if(devAngle==="leftHipAngle"||devAngle==="rightHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten your back"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Left knee should be at 90 degrees"));
    else if(devAngle==="rightKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten your right knee"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Both arms should be parallel to the ground"));
  }

  else if(poseName==="Cow Pose") {
    if(devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Elbows should be straight"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten back, knees under your bum"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Knees should be under your bum"));
    else if(devAngle==="leftShoulderAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Fully extend arms"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Look up slightly to stretch back"));
  }

  else if(poseName==="Half Moon Pose") {
    if(devAngle==="leftElbowAngle"||devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Make sure your Elbows aren't bent"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Balance on your left leg"));
      else if(devAngle==="rightHipAngle")
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Raise your right leg"));
    else if(devAngle==="leftKneeAngle"||devAngle==="rightKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your knees"));
    else if(devAngle==="leftShoulderAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Left arm should be straight up"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Touch the ground with your right hand"));
  }

  else if(poseName==="Tree Pose") {
    if(devAngle==="leftElbowAngle"||devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Fold your hands properly"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Raise your left foot"));
      else if(devAngle==="rightHipAngle")
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Balance on your right leg"));
    else if(devAngle==="rightKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your right knee"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Place left foot on inner thigh"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Fold hands properly"));
  }

  
  else if(poseName==="Warrior 3 Pose") {
    if(devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your elbows"));
    else if(devAngle==="rightHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten your back and right leg"));
      else if(devAngle==="rightShoulderAngle")
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Extend your arm fully"));
    else if(devAngle==="rightKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your right knee"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Balance on your left leg"));
  }

  else if(poseName==="Easy Pose") {
    if(devAngle==="leftElbowAngle"||devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Loosen your elbows slightly"));
    else if(devAngle==="leftShoulderAngle"||devAngle==="rightShoulderAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten your back"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Rest your palms on your knees"));
  }

  else if(poseName==="Plank Pose") {
    if(devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Elbows shouldn't bend"));
    else if(devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your back"));
      else if(devAngle==="leftShoulderAngle")
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Arms should be fully extended"));
    else if(devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your knees"));
    else
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Tighten your core"));
  }

  else {

    if(poseName==="Mountain Pose" && devAngle==="leftKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten Your Left Leg"));
    else if(poseName==="Mountain Pose" && devAngle==="rightKneeAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Straighten You Right Leg"));
    else if(poseName==="Mountain Pose" && devAngle==="rightHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Stand straight, don't lean sideways"));
    else if(poseName==="Mountain Pose" && devAngle==="leftHipAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Stand straight, don't lean sideways"));
    else if(poseName==="Mountain Pose" && devAngle==="leftShoulderAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Keep your left hand slightly closer to your body"));
    else if(poseName==="Mountain Pose" && devAngle==="rightShoulderAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Keep your right hand slightly closer to your body"));
    else if(poseName==="Mountain Pose" && devAngle==="leftElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your left Elbow"));
    else if(poseName==="Mountain Pose" && devAngle==="rightElbowAngle")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Don't bend your right Elbow"));
    else
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("What are you even doing?"));
  }
}
  