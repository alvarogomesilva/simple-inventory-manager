import { useState } from "react";
import { api } from "../../../services/api";

interface LoginProps {
    email: string;
    password: string;
}

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const login = async (inputs: LoginProps) => {
        setIsLoading(true)

        try {
             await api.post('/register', inputs)
           
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, login }
}