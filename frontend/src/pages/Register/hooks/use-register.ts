import { useState } from "react";
import { api } from "../../../services/api";
import {toast} from "sonner";

interface RegisterProps {
    name: string;
    email: string;
    password: string;
}

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async (inputs: RegisterProps) => {
        setIsLoading(true)

        try {
             await api.post('/register', inputs)
             toast.success('Usuário cadastrado!')
        } catch (error: any) {
            const errorMessage = error.response.data || "Erro ao registrar. Tente novamente.";
            
            toast.error(errorMessage, { position: "top-right" })
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, register }
}