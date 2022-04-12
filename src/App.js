import { AuthCheck, FirebaseAppProvider } from "reactfire";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "firebase/auth";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Pose from "./components/Pose";
import Profile from "./components/Profile";
import Stats from "./components/Stats";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAqkTF31Q9PtrcFqhWmw50XII6E-Xg4ZfI",
    authDomain: "yogasaan-d1b36.firebaseapp.com",
    projectId: "yogasaan-d1b36",
    storageBucket: "yogasaan-d1b36.appspot.com",
    messagingSenderId: "348302775227",
    appId: "1:348302775227:web:b61289fc3dcbc34fb7ea9e",
    measurementId: "G-56RXXVY8RY"
  };

  return (
    <div className={"main"}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <AuthCheck fallback={<Login />}>
          <Router>
            <Header />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/stats" element={<Stats />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/pose" element={<Pose poseID={"4XIRMFpmKmUiFNjWgUrr"}/>}></Route>
                </Routes>
              </div>
          </Router>
        </AuthCheck>
      </FirebaseAppProvider>
    </div>
  );
}

export default App;
