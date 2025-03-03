import app from "../configdb";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

export const authSignup = async (email, password, name, surname) =>  {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "Usuarios", user.uid), {
            name: name,
            surname: surname,
            uid: user.uid,
            email: user.email
        });

        return { success: true, user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
