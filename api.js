import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDYDCWFl7Q_I1wp1azcOH3sVHj3NtP8HqQ",
  authDomain: "portfolio-e14cd.firebaseapp.com",
  projectId: "portfolio-e14cd",
  storageBucket: "portfolio-e14cd.appspot.com",
  messagingSenderId: "297640586584",
  appId: "1:297640586584:web:c41a52c8f5fcaf8826c92d"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const projectsCollectionRef = collection(db , "projects")

export async function getProjects() {
    const snapshot = await getDocs(projectsCollectionRef)
    const projects = snapshot.docs.map( doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return projects
}

export async function getProject(id) {
    const docRef = doc(db, "projects" , id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

