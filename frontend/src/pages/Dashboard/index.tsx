import { BarChart2, ChevronRight, Settings, Users } from "lucide-react";
import { Layout } from "../../components/Layout";

interface DashboardCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    trend?: string;
    trendUp?: boolean;
}

export function Dashboard() {
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

    return (
        <Layout>
            <h1 className="text-xl font-bold">Bem-vindo ao Dashboard</h1>

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
        </Layout>
    );
}
