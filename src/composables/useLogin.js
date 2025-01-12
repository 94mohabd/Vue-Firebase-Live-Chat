import { projectAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const res = await signInWithEmailAndPassword(projectAuth, email, password);
        error.value = null;
        return res;
    } catch (err) {
        error.value = "Incorect login credentials";
        console.log(err.message);
    }

}

const useLogin = () => {
    return { error, login }
}

export default useLogin;