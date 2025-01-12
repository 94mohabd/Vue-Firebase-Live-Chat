import { projectAuth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
    error.value = null;

    try {
        await signOut(projectAuth);
        error.value = null;
    } catch (err) {
        error.value = err.message;
        console.log(err.message);
    }

}

const useLogout = () => {
    return { error, logout }
}

export default useLogout;