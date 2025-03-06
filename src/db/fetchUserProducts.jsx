import app from "../configdb";
import { collection, query, where, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const db = getFirestore(app);

export const fetchUserProducts = async (uid) => {
    try {
        const productsCollection = collection(db, 'Produtos');
        const q = query(productsCollection, where('uid_author', '==', uid));
        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        return [];
    }
};
