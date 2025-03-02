import app from "../configdb.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const db = getFirestore(app);

export const getAllProducts = async () => {
    const dados = [];
    const colecaoRef = collection(db, "Produtos");
    
    try {
        const snapshot = await getDocs(colecaoRef);
        snapshot.forEach((doc) => {
            dados.push(JSON.parse(doc.data().produto));
        });
    } catch (error) {
        console.error("Erro ao buscar documentos:", error);
    }

    return { dados }; 
};