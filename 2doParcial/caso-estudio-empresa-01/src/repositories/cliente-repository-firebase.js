// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  doc,
  getFirestore,
  collection,
  setDoc,
  getDocs,
  addDoc,
  query, where
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChNRYQWWSdMSUlgXsYbadiHEpHy8nwl-E",
  authDomain: "curso-tecnicas-programacion.firebaseapp.com",
  projectId: "curso-tecnicas-programacion",
  storageBucket: "curso-tecnicas-programacion.appspot.com",
  messagingSenderId: "531542491166",
  appId: "1:531542491166:web:8adc797b6b4f5d15952e0f",
  measurementId: "G-GVREJD7MQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//const analytics = getAnalytics(app);

export class ClienteRepository {
  constructor() {
    this.clientesRef = collection(db, 'clientes');
  }

  async create(cliente) {
    const cedula = cliente.cedula
    const q = query(this.clientesRef, where("cedula", "==", cedula))
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.docs.length) {
      await addDoc(this.clientesRef, cliente.getJson())
    } else {
      console.log('Ya existe')
    }

  }

  async getClientes() {
    const clientesSnapshot = await getDocs(this.clientesCollections)
    const clientes = clientesSnapshot.docs
    return clientes
  }

}
