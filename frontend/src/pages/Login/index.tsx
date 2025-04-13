import { Link, useNavigate } from "react-router";
import { FormEvent, useState } from "react";
import { useLogin } from "./hooks/use-login";
import { loginSchema } from "./validations/login-validation";

export function Login() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const { signIn, isLoading } = useLogin()
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const result = loginSchema.safeParse(inputs)

        if (!result.success) {
            const formattedErrors = result.error.format()
            setErrors({
                email: formattedErrors.email?._errors[0],
                password: formattedErrors.password?._errors[0],
            });
        }
        setErrors({});
        await signIn(inputs)
        navigate('/dashboard')
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Entre com sua conta</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                type="email" name="email" id="email" required className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${errors.email ? "outline-red-500" : "outline-gray-300"} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`} />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Senha</label>
                            <div className="text-sm">
                                <Link to="/reset-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueçeu a senha?</Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                type="password" name="password" id="password" required className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${errors.password ? "outline-red-500" : "outline-gray-300"} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`} />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer">
                            {isLoading ? "Carregando..." : "Login"}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Já possui conta?
                    <Link to={"/register"} className="ml-0.5 font-semibold text-blue-600 hover:text-blue-500">Fazer login</Link>
                </p>
            </div>
        </div>
    )
}