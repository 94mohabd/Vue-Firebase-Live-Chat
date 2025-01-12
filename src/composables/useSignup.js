import { projectAuth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password);
        if (!res) {
            throw new Error("Could not complete the signup");
        }
        await updateProfile(res.user, { displayName });
        error.value = null;
        return res;
    } catch (err) {
        error.value = err.message;
        console.log(err.message);
    }

}

const useSignup = () => {
    return { error, signup }
}

export default useSignup;