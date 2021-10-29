import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";


const firebaseInitialization = () => {
    const app = initializeApp(firebaseConfig);
}


export default firebaseInitialization;