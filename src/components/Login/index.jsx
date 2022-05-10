import { useAuth } from "reactfire";
import firebase from "firebase";
import "firebase/auth";
import "./index.scss";
import google from "../../assets/google.svg";

export default function Login() {
    const auth = useAuth();
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    const providerEmail = new firebase.auth.EmailAuthProvider();

    const signInGoogle = async () => {
        try {
            const pop = await auth.signInWithPopup(providerGoogle);
            const cred = pop.credential;
            const user = pop.user;

            console.log(cred.toJSON(), user.toJSON());
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div className="login_container">
                <div className="login_form">
                <img src={"/yog.png"} alt="yogasaan" style={{ width: "50%" }} />
                <div style={{ fontSize: 24 }}>Fine tune your Yoga</div>
                    <div tabIndex={0} className="signin_with_google" onClick={()=>signInGoogle()}>
                        <img src={google} alt="" className="icon" />
                        Continue with Google
                    </div>
                </div>
            </div>
        </div>
    );
}