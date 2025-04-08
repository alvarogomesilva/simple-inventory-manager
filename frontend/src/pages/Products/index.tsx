import { useState } from "react";
import { Layout } from "../../components/Layout";
import { ModalProducts } from "../../components/ModalProducts";
import { TableProducts } from "../../components/TableProducts";

export function Products() {
    const [isModal, setIsModal] = useState(false)
    
        const openModal = () => {
            setIsModal(!false)
        }

    return (
        <Layout>
              <ModalProducts isOpen={isModal} onClose={() => setIsModal(false)} />
            <div className="flex justify-between items-center mb-1 p-4">
                <h1 className="text-2xl font-bold">Produtos</h1>
                <button
                    onClick={openModal}

                    className="bg-blue-600 rounded-sm py-2 px-4 text-white cursor-pointer">Adicionar</button>
            </div>
            <TableProducts />
        </Layout>
    )
}