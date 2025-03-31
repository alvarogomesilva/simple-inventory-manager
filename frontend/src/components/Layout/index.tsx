import { Bell, LogOut, MenuIcon, Settings, User } from "lucide-react";
import { Sidebar } from "../Sidebar";
import { useEffect, useRef, useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 overflow-auto">
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-4 py-4 lg:px-8">
                        <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:hidden" onClick={toggleSidebar}>
                            <MenuIcon size={20} />
                        </button>
                        <div className="ml-auto flex items-center space-x-4 relative" ref={userMenuRef}>
                            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 relative">
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>
                            <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleUserMenu}>
                                <img src="https://placehold.co/40" alt="Avatar" className="h-8 w-8 rounded-full" />
                                <div className="hidden lg:block">
                                    <p className="text-sm font-medium">João Silva</p>
                                    <p className="text-xs text-gray-500">Administrador</p>
                                </div>
                            </div>
                            {userMenuOpen && (
                                <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <User className="w-4 h-4 mr-2" /> Editar Perfil
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <Settings className="w-4 h-4 mr-2" /> Configurações
                                    </a>
                                    <hr className="border-gray-200" />
                                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                        <LogOut className="w-4 h-4 mr-2" /> Sair
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </header>
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}