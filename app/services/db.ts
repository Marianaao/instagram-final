import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {  getFirestore, collection, doc, query, where, getDocs, addDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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

  const usersRef = collection(db,"usuarios");
  const postIG = collection(db,"postIG");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }


export const listenPost = (cb: (post:any) => void) =>{
  try {
    onSnapshot(collection(db, "postIG"), (documentos) => {
      const post = documentos.docs.map( (doc:any) => ({id: doc.id, data: doc.data()}));
      cb(post);
    });
  } catch (error) {
    
  }
}

  export const getPost = async () =>{
    try {
    
      const post = [];

      const q = query(postIG);
      const querySnapshot = await getDocs(q);

  
      querySnapshot.forEach(doc => {
        post.push({id: doc.id, data: doc.data()});
      });
      return post;
    } catch (error) {
      
    }
  }

  export const addPost = async ({
   profileimg,
   name,
   ubication,
   post,
   views,
   description
  }:{
    profileimg: String
    name: String
    ubication: String
    post: String
    views: String
    description: String
  }) => {
    try {
        const docRef = await addDoc(collection(db,"postIG"),{
          profileimg,
          name,
          ubication,
          post,
          views,
          description
        });
        return true;
    } catch (error) {
      console.log(error);
      
        return false;
    }
  }