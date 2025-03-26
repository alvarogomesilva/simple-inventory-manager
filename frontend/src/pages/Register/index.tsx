import { FormEvent, useState } from "react";
import { Link } from "react-router";
import { api } from "../../services/api";

export function Register() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        try {
            const response  = await api.post('/register', inputs)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Crie sua conta</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form 
                    onSubmit={handleSubmit}
                    className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Nome</label>
                        <div className="mt-2">
                            <input 
                            value={inputs.name}
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                            type="text" name="name" id="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input 
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Senha</label>
                        <div className="mt-2">
                            <input 
                             value={inputs.password}
                             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            type="password" name="password" id="password" autoComplete="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Register</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Não possui conta?
                    <Link to={"/login"} className="ml-0.5 font-semibold text-indigo-600 hover:text-indigo-500">Faça o seu cadastro</Link>
                </p>
            </div>
        </div>
    )
}