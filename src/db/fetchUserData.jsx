import app from "../configdb";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const db = getFirestore(app);

export async function fetchUserData(uid) {
    try {
        const q = query(collection(db, "Usuarios"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        return querySnapshot.docs[0]?.data() || null;
    } catch (error) {
        console.error("Erro ao buscar:", error);
        return null;
    }
}
