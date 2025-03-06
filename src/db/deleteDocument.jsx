import app from "../configdb";
import { getFirestore, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const db = getFirestore(app);

export const deleteDocument = async (docId) => {
    try {
        await deleteDoc(doc(db, "Produtos", docId));
        console.log("Documento excluído com sucesso!");
        return true;
    } catch (error) {
        console.error("Erro ao excluir documento:", error);
        return false;
    }
};
