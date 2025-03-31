import { useState } from "react";

export function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async () => {}

    return (
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Qual o seu e-mail?</h2>
              </div>
        
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campo Nome */}
                  <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/>
                        </div>
                    </div>

               
                  <div>
                    <button 
                    disabled={isLoading}
                    type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer">
                      {isLoading ? "Carregando..." : "Enviar"}
                    </button>
                  </div>
                </form>
        
            
              </div>
            </div>
    )
}