import { Box, Home, BarChart2, Settings, HelpCircle, ChartBarBig, CircleChevronLeft, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean; toggleSidebar: () => void }) {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? "bg-blue-500 text-white font-normal" : "text-white-600 hover:bg-gray-100 hover:text-gray-900";

    return (
        <>
            {sidebarOpen && <div className="fixed inset-0 bg-gray-400 bg-opacity z-20 lg:hidden" onClick={toggleSidebar} />}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col overflow-y-auto">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <h1 className="ml-2 text-xl font-bold text-blue-700">Administração</h1>
                        </div>
                        <button
                            className="rounded-md p-1 text-gray-500 ml-4 cursor-pointer hover:bg-gray-100 hover:text-gray-700 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <CircleChevronLeft size={25} />
                        </button>
                    </div>
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        <Link to="/dashboard" className={`flex items-center rounded-md px-4 py-2 ${isActive("/dashboard")}`}>
                            <Home className="h-5 w-5 mr-3" />
                            Dashboard
                        </Link>
                        <Link to="/categories" className={`flex items-center rounded-md px-4 py-2 ${isActive("/categories")}`}>
                            <ChartBarBig className="h-5 w-5 mr-3" />
                            Categorias
                        </Link>
                        <Link to="/products" className={`flex items-center rounded-md px-4 py-2 ${isActive("/products")}`}>
                            <Box className="h-5 w-5 mr-3" />
                            Produtos
                        </Link>
                        <Link to="/suppliers" className={`flex items-center rounded-md px-4 py-2 ${isActive("/suppliers")}`}>
                            <Truck className="h-5 w-5 mr-3" />
                            Fornecedores
                        </Link>
                        <Link to="/movements" className={`flex items-center rounded-md px-4 py-2 ${isActive("/movements")}`}>
                            <BarChart2 className="h-5 w-5 mr-3" />
                            Movimentações
                        </Link>
                        <Link to="/settings" className={`flex items-center rounded-md px-4 py-2 ${isActive("/settings")}`}>
                            <Settings className="h-5 w-5 mr-3" />
                            Configurações
                        </Link>
                        <Link to="/help" className={`flex items-center rounded-md px-4 py-2 ${isActive("/help")}`}>
                            <HelpCircle className="h-5 w-5 mr-3" />
                            Ajuda
                        </Link>
                    </nav>
                </div>
            </aside>
        </>
    );
}
