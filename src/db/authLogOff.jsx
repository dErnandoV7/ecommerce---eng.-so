import app from "../configdb";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js"

export const authLogOff = async () => {
    const auth = getAuth(app);
    try {
        await signOut(auth);
        console.log("Usuário desconectado com sucesso!");
        return { logado: false };
    } catch (error) {
        console.error("Erro ao desconectar o usuário:", error);
        return { logado: true };
    }
};