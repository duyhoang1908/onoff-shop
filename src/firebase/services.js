import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const addDocument = async (collectionName, data) => {
    try {
        await addDoc(collection(db, collectionName), {
            ...data,
        });
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export const addToCart = async (data) => {
    try {
        await addDocument('cart', data);
    } catch (error) {
        console.log(error);
    }
};

export const getListProductWithUid = async (uid) => {
    let data = [];
    const q = query(collection(db, 'buy'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });
    return data;
};

export const getProductsByGender = async (gender) => {
    try {
        let data = [];
        const q = query(collection(db, 'products'), where('sex', '==', gender));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductDetail = async (gender, code) => {
    try {
        let data = {};
        const q = query(collection(db, 'products'), where('sex', '==', gender), where('code', '==', code));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data = { ...doc.data(), id: doc.id };
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const filterProductsWithType = async (gender, type) => {
    try {
        let data = [];
        const q = query(collection(db, 'products'), where('sex', '==', gender), where('type', '==', type));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const buyProducts = async (data) => {
    await addDocument('buy', data);
};
