import app from "../configdb";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const auth = getAuth(app);
const db = getFirestore(app);

export const createProduct = async (name, desc, price, url, whats, category) => {    
    const user = auth.currentUser;
    if (!user) {
        return { success: false, message: 'Usuário não está logado.' };
    }

    const data = {
        name,
        desc,
        price,
        url,
        uid_author: user.uid,
        whats,
        category,
    };

    try {
        const docRef = await addDoc(collection(db, 'Produtos'), data);
        return { success: true, message: 'Produto criado com sucesso!' };
    } catch (error) {
        return { success: false, message: 'Erro ao criar produto: ' + error.message };
    }
};
