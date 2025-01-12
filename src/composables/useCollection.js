import { projectFirestore } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue"

const useCollection = (collec) => {
    const error = ref(null);

    const addDoct = async (doc) => {
        error.value = null;
        try {
            await addDoc(collection(projectFirestore, collec), doc);

        } catch (err) {
            console.log(err.message);
            error.value = "could not send the message";
        }
    }
    return { error, addDoct }
}

export default useCollection