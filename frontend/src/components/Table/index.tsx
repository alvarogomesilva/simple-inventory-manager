import React, { useState, useEffect } from 'react';
import { Eye, Edit, Trash2, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// Definindo os tipos
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    lastLogin: string;
};

// Dados de exemplo
const initialUsers: User[] = [
    { id: 1, name: 'Carlos Silva', email: 'carlos.silva@exemplo.com', role: 'Admin', status: 'active', lastLogin: '2025-03-28' },
    { id: 2, name: 'Ana Oliveira', email: 'ana.oliveira@exemplo.com', role: 'Usuário', status: 'active', lastLogin: '2025-03-30' },
    { id: 3, name: 'Bruno Santos', email: 'bruno.santos@exemplo.com', role: 'Editor', status: 'inactive', lastLogin: '2025-03-15' },
    { id: 4, name: 'Paula Costa', email: 'paula.costa@exemplo.com', role: 'Usuário', status: 'active', lastLogin: '2025-03-29' },
    { id: 5, name: 'Rodrigo Lima', email: 'rodrigo.lima@exemplo.com', role: 'Editor', status: 'inactive', lastLogin: '2025-03-20' },
    { id: 6, name: 'Camila Ferreira', email: 'camila.ferreira@exemplo.com', role: 'Admin', status: 'active', lastLogin: '2025-03-31' },
    { id: 7, name: 'Lucas Martins', email: 'lucas.martins@exemplo.com', role: 'Usuário', status: 'active', lastLogin: '2025-03-25' },
    { id: 8, name: 'Juliana Alves', email: 'juliana.alves@exemplo.com', role: 'Editor', status: 'inactive', lastLogin: '2025-03-18' },
    { id: 9, name: 'Gabriel Souza', email: 'gabriel.souza@exemplo.com', role: 'Usuário', status: 'active', lastLogin: '2025-03-27' },
    { id: 10, name: 'Mariana Costa', email: 'mariana.costa@exemplo.com', role: 'Admin', status: 'active', lastLogin: '2025-03-29' },
    { id: 11, name: 'Felipe Gomes', email: 'felipe.gomes@exemplo.com', role: 'Editor', status: 'inactive', lastLogin: '2025-03-22' },
    { id: 12, name: 'Amanda Dias', email: 'amanda.dias@exemplo.com', role: 'Usuário', status: 'active', lastLogin: '2025-03-30' },
];

const ResponsiveTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    // Estado para modal de confirmação de exclusão
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);

    // Aplicar filtros
    useEffect(() => {
        let result = initialUsers;

        // Filtro por termo de pesquisa
        if (searchTerm) {
            result = result.filter(
                (user) =>
                    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtro por função
        if (roleFilter) {
            result = result.filter((user) => user.role === roleFilter);
        }

        // Filtro por status
        if (statusFilter) {
            result = result.filter((user) => user.status === statusFilter);
        }

        setFilteredUsers(result);
        setTotalPages(Math.ceil(result.length / itemsPerPage));
        setCurrentPage(1); // Reset para a primeira página quando os filtros mudam
    }, [searchTerm, roleFilter, statusFilter, itemsPerPage]);

    // Aplicar paginação
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setUsers(filteredUsers.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, filteredUsers, itemsPerPage]);

    // Resetar filtros
    const resetFilters = () => {
        setSearchTerm('');
        setRoleFilter('');
        setStatusFilter('');
    };

    // Mudar página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Ir para a página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Ir para a próxima página
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Funções para lidar com ações
    const handleView = (id: number) => {
        console.log(`Visualizando usuário ${id}`);
        // Implementar lógica para visualizar usuário
        alert(`Visualizando detalhes do usuário ${id}`);
    };

    const handleEdit = (id: number) => {
        console.log(`Editando usuário ${id}`);
        // Implementar lógica para editar usuário
        alert(`Editando usuário ${id}`);
    };

    const openDeleteModal = (id: number) => {
        setUserToDelete(id);
        setDeleteModalOpen(true);
    };

    const handleDelete = () => {
        if (userToDelete) {
            console.log(`Excluindo usuário ${userToDelete}`);
            // Implementar lógica para excluir usuário

            // Simular exclusão atualizando a lista
            const updatedUsers = filteredUsers.filter(user => user.id !== userToDelete);
            setFilteredUsers(updatedUsers);

            // Fechar modal
            setDeleteModalOpen(false);
            setUserToDelete(null);
        }
    };

    const cancelDelete = () => {
        setDeleteModalOpen(false);
        setUserToDelete(null);
    };

    // Gerar array de números de página
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mx-auto p-4">

            <div className="flex justify-between items-center mb-1 p-4">
                <h1 className="text-2xl font-bold">Categorias</h1>
                <button className="bg-blue-600 rounded-sm py-2 px-4 text-white cursor-pointer">Adicionar</button>
            </div>

            {/* Área de Pesquisa e Filtros */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="mb-4">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                        Pesquisar
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="search"
                            placeholder="Buscar por nome ou email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                            Função
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Filter size={18} className="text-gray-400" />
                            </div>
                            <select
                                id="role"
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Todos</option>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Usuário">Usuário</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Filter size={18} className="text-gray-400" />
                            </div>
                            <select
                                id="status"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Todos</option>
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="itemsPerPage" className="block text-sm font-medium text-gray-700 mb-1">
                            Itens por página
                        </label>
                        <select
                            id="itemsPerPage"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button
                            onClick={resetFilters}
                            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                        >
                            <Filter size={16} className="mr-2" />
                            Limpar Filtros
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabela Responsiva */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nome
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Função
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                    Último Login
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500 md:hidden">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {user.status === 'active' ? 'Ativo' : 'Inativo'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                            <div className="text-sm text-gray-500">
                                                {new Date(user.lastLogin).toLocaleDateString('pt-BR')}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleView(user.id)}
                                                    className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100"
                                                    title="Visualizar"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(user.id)}
                                                    className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-100"
                                                    title="Editar"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => openDeleteModal(user.id)}
                                                    className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100"
                                                    title="Excluir"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                        Nenhum usuário encontrado
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Indicador de Resultados e Paginação */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-2 sm:mb-0">
                    Exibindo {users.length} de {filteredUsers.length} usuários
                </div>

                {totalPages > 1 && (
                    <div className="flex items-center">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center justify-center px-3 py-2 rounded-l-md border ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="hidden md:flex">
                            {pageNumbers.map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`px-4 py-2 border-t border-b ${currentPage === number
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-blue-600 hover:bg-blue-50'
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>

                        <div className="md:hidden flex items-center">
                            <span className="px-4 py-2 border-t border-b bg-white text-gray-700">
                                {currentPage} de {totalPages}
                            </span>
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center justify-center px-3 py-2 rounded-r-md border ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>

            {/* Modal de Confirmação de Exclusão */}
            {deleteModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Confirmar Exclusão</h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResponsiveTable;