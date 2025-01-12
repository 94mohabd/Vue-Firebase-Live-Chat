import { projectFirestore } from "../firebase/config";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue"

const getCollection = (collec) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = query(collection(projectFirestore, collec), orderBy('createdAt'));
    const unsub = onSnapshot(collectionRef, snap => {
        console.log("snapshot");
        let results = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results;
        error.value = null;
    }, (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = "could not fetch data";
    });

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })
    return { documents, error }
}

export default getCollection