import firebaseConfig from "../configdb.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllProducts = async () => {
    const dados = [];
    const colecaoRef = collection(db, "Produtos");

    try {
        const snapshot = await getDocs(colecaoRef);  // Aguarda a resposta da Firebase
        snapshot.forEach((doc) => {
            dados.push(JSON.parse(doc.data().produto));  // Supondo que cada documento tem o campo 'produto'
        });
    } catch (error) {
        console.error("Erro ao buscar documentos:", error);
    }

    return { dados };  // Agora retorna os dados após a operação assíncrona
};