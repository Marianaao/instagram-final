var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyA2un6NTE5KQRp2rMXGJIF8eOK2INtXFoU",
    authDomain: "post-compts.firebaseapp.com",
    projectId: "post-compts",
    storageBucket: "post-compts.appspot.com",
    messagingSenderId: "227906573796",
    appId: "1:227906573796:web:7ceeb804be0574be7223f1",
    measurementId: "G-FSRTY9X1BD"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
const postIG = collection(db, "postIG");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "usuarios"), {
            email,
            password
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const listenPost = (cb) => {
    try {
        onSnapshot(collection(db, "postIG"), (documentos) => {
            const post = documentos.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            cb(post);
        });
    }
    catch (error) {
    }
};
export const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = [];
        const q = query(postIG);
        const querySnapshot = yield getDocs(q);
        querySnapshot.forEach(doc => {
            post.push({ id: doc.id, data: doc.data() });
        });
        return post;
    }
    catch (error) {
    }
});
export const addPost = ({ profileimg, name, ubication, post, views, description }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "postIG"), {
            profileimg,
            name,
            ubication,
            post,
            views,
            description
        });
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
