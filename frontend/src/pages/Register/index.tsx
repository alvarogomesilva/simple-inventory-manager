import { FormEvent, useState } from "react";
import { Link } from "react-router-dom"; // Corrigido
import { useRegister } from "./hooks/use-register";
import { registerSchema } from "./validations/register-validation";

export function Register() {
  const { isLoading, register } = useRegister();
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = registerSchema.safeParse(inputs);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0],
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
      return;
    }

    setErrors({});
    setInputs({ name: "", email: "", password: ""})
    await register(inputs);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Crie sua conta</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Nome</label>
            <div className="mt-2">
              <input
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value.trim() })}
                type="text"
                id="name"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${errors.name ? "outline-red-500" : "outline-gray-300"} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
            <div className="mt-2">
              <input
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                type="email"
                id="email"
                autoComplete="email"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${errors.email ? "outline-red-500" : "outline-gray-300"} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Senha</label>
            <div className="mt-2">
              <input
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                type="password"
                id="password"
                autoComplete="password"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 ${errors.password ? "outline-red-500" : "outline-gray-300"} placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Botão de envio */}
          <div>
            <button 
            disabled={isLoading}
            type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer">
              {isLoading ? "Carregando..." : "Cadastre-se"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Já possui uma conta?
          <Link to="/login" className="ml-0.5 font-semibold text-blue-600 hover:text-blue-500">Faça login</Link>
        </p>
      </div>
    </div>
  );
}
