import { useState } from "react"
import { useAuthStore } from "../../../store/use-auth-store";
import toast from "react-hot-toast";

interface LoginProps {
    email: string;
    password: string;
}

export const useLogin = () => {
    const { login } = useAuthStore()
    const [isLoading, setIsLoading] = useState(false)

    const signIn = async (inputs: LoginProps) => {
        const { email, password } = inputs
        setIsLoading(true)
        try {
            await login(email, password)
        } catch (error) {
            toast.error('Email/senha incorretos', { position: "top-right" })
        } finally {
            setIsLoading(false)
        }
    }

    return { signIn, isLoading }
}