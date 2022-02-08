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

    const signInEmail = async () => {
        try {
            const pop = await auth.signInWithEmailAndPassword("admin@xyz.com","admin@xyz.com");
            const cred = pop.credential;
            const user = pop.user;

            console.log(cred.toJSON(), user.toJSON());
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <div>
            <button onClick={() => signInEmail()}>Login</button>
            <div className="login_container">
                <div className="login_form">
                    <div>Yogasaan</div>
                    <div tabIndex={0} className="signin_with_google" onClick={()=>signInGoogle()}>
                        <img src={google} alt="" className="icon" />
                        Continue with Google
                    </div>
                    <div tabIndex={0} className="signin_with_google" onClick={()=>signInEmail()}>
                        <img src={google} alt="" className="icon" />
                        Continue with Email
                    </div>
                </div>
            </div>
        </div>
    );
}