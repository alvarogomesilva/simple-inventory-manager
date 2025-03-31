import React, { useEffect, useRef, useState } from "react";
import { Menu, Box, Home, Activity, ChartBarBig, Users, BarChart2, Settings, HelpCircle, Bell, Search, X, ChevronRight, User, LogOut } from "lucide-react";


interface DashboardCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    trend?: string;
    trendUp?: boolean;
}

interface ChartDataPoint {
    name: string;
    value: number;
}

export function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Dados de exemplo para os gráficos
    const chartData: ChartDataPoint[] = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 300 },
        { name: "Mar", value: 600 },
        { name: "Apr", value: 800 },
        { name: "May", value: 500 },
        { name: "Jun", value: 700 },
        { name: "Jul", value: 900 }
    ];

    // Componente para os cards do dashboard
    const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, trend, trendUp }) => (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                    {trend && (
                        <div className="flex items-center mt-2">
                            <span className={`text-xs font-medium ${trendUp ? "text-green-500" : "text-red-500"}`}>
                                {trend}
                            </span>
                        </div>
                    )}
                </div>
                <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
            </div>
        </div>
    );

    // Fecha o menu ao clicar fora
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Overlay para dispositivos móveis */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-400 bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col overflow-y-auto">
                    {/* Logo e botão de fechar para mobile */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold">D</span>
                            </div>
                            <h1 className="ml-2 text-xl font-bold">Dashboard</h1>
                        </div>
                        <button
                            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Itens do menu */}
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-900 bg-blue-100 font-medium"
                        >
                            <Home className="h-5 w-5 mr-3 text-blue-600" />
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <ChartBarBig className="h-5 w-5 mr-3 text-gray-500" />
                            Categorias
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <Box className="h-5 w-5 mr-3 text-gray-500" />
                            Produtos
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <Activity className="h-5 w-5 mr-3 text-gray-500" />
                            Movimentações
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <BarChart2 className="h-5 w-5 mr-3 text-gray-500" />
                            Relatórios
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <Settings className="h-5 w-5 mr-3 text-gray-500" />
                            Configurações
                        </a>
                        <a
                            href="#"
                            className="flex items-center rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
                        >
                            <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                            Ajuda
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Conteúdo principal */}
            <div className="flex-1 overflow-auto ">
                {/* Cabeçalho */}
                <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-4 lg:px-8">
                {/* Botão de menu para mobile */}
                <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:hidden" onClick={toggleSidebar}>
                    <Menu size={20} />
                </button>

                {/* Área do usuário no topo */}
                <div className="ml-auto flex items-center space-x-4 relative" ref={userMenuRef}>
                    {/* Ícone de notificação */}
                    <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 relative">
                        <Bell size={20} />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    {/* Avatar e Nome - Abre o menu ao clicar */}
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleUserMenu}>
                        <img src="/api/placeholder/40/40" alt="Avatar" className="h-8 w-8 rounded-full" />
                        <div className="hidden lg:block">
                            <p className="text-sm font-medium">João Silva</p>
                            <p className="text-xs text-gray-500">Administrador</p>
                        </div>
                    </div>

                    {/* Submenu do usuário */}
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
                {/* Conteúdo do dashboard */}
                <main className="p-4 lg:p-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Visão geral</h1>
                        <p className="text-gray-500">Bem-vindo ao seu dashboard, João</p>
                    </div>

                    {/* Cards principais */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                        <DashboardCard
                            title="Usuários totais"
                            value="24,532"
                            icon={<Users size={20} className="text-blue-600" />}
                            trend="+12.5% desde o último mês"
                            trendUp={true}
                        />
                        <DashboardCard
                            title="Receita mensal"
                            value="R$ 56,789"
                            icon={<BarChart2 size={20} className="text-green-600" />}
                            trend="+8.2% desde o último mês"
                            trendUp={true}
                        />
                        <DashboardCard
                            title="Taxa de conversão"
                            value="3.24%"
                            icon={<ChevronRight size={20} className="text-yellow-600" />}
                            trend="-1.2% desde o último mês"
                            trendUp={false}
                        />
                        <DashboardCard
                            title="Ticket médio"
                            value="R$ 148,25"
                            icon={<Settings size={20} className="text-purple-600" />}
                            trend="+5.3% desde o último mês"
                            trendUp={true}
                        />
                    </div>

                    {/* Gráficos */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium">Desempenho de vendas</h2>
                                <button className="text-sm text-blue-600 hover:text-blue-800">Ver todos</button>
                            </div>
                            <div className="h-64">
                                {/* Aqui ficaria o gráfico de vendas, substituído por uma representação simples */}
                                <div className="flex h-full items-end justify-between space-x-2">
                                    {chartData.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <div
                                                className="w-8 rounded-t-md bg-blue-500"
                                                style={{ height: `${(item.value / 900) * 100}%` }}
                                            ></div>
                                            <span className="mt-2 text-xs text-gray-500">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium">Aquisição de usuários</h2>
                                <button className="text-sm text-blue-600 hover:text-blue-800">Ver todos</button>
                            </div>
                            <div className="h-64 flex items-center justify-center">
                                {/* Aqui ficaria o gráfico de pizza, substituído por uma representação simples */}
                                <div className="relative h-48 w-48 rounded-full bg-gray-200">
                                    <div
                                        className="absolute inset-0 rounded-full bg-blue-500"
                                        style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)' }}
                                    ></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-32 w-32 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabela de atividades recentes */}
                    <div className="rounded-lg bg-white p-6 shadow-md overflow-hidden">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-medium">Atividades recentes</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-800">Ver todos</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <tr key={item} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img
                                                        src={`/api/placeholder/32/32`}
                                                        alt="Avatar"
                                                        className="h-8 w-8 rounded-full"
                                                    />
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">Usuário {item}</div>
                                                        <div className="text-sm text-gray-500">usuario{item}@exemplo.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {item % 2 === 0 ? "Compra realizada" : "Atualização de perfil"}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">28/03/2025</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item % 3 === 0
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : item % 2 === 0
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-blue-100 text-blue-800"
                                                    }`}>
                                                    {item % 3 === 0
                                                        ? "Pendente"
                                                        : item % 2 === 0
                                                            ? "Completo"
                                                            : "Em progresso"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
