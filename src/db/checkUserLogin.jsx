import app from "../configdb";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const auth = getAuth(app);

export const checkUserLogin = async () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) resolve(true)
            else resolve(false)
        });
    });
};