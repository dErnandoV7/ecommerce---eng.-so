import app from "../configdb.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const auth = getAuth(app);

export const authChek = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login bem-sucedido!");
        return userCredential.user;
    } catch (error) {
        console.error("Erro ao fazer login");
        return null;
    }
};