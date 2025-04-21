import { FormEvent, useState } from "react";
import { ModalPropsCategories } from "../../types/categories";
import { useCategories } from "../../hooks/use-categories";


export function ModalCategories({ isOpen, onClose, isEdit, selectedCategoryEdit }: ModalPropsCategories) {
  const { isLoading, handleNewCategory, handleEdit } = useCategories()
  const [nameCategory, setNameCategory] = useState('')
  const [nameCategoryEdited, setNameCategoryEdited] = useState(selectedCategoryEdit?.name)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await handleNewCategory(nameCategory)
  }

  const handleEditCategory = async (e: FormEvent) => {
    e.preventDefault()
    await handleEdit(selectedCategoryEdit.id, nameCategoryEdited)
  }

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-[999] justify-center items-center overflow-y-auto overflow-x-hidden`}
    >

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />


      <div className="relative z-10 p-4 w-full max-w-md max-h-full">
        <div className="bg-white dark:bg-gray-700/70 backdrop-blur-md rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isEdit ? 'Editar Categoria' : 'Nova categoria'}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5 flex flex-col">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nome
                </label>

                {isEdit ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={nameCategoryEdited}
                    onChange={(e) => setNameCategoryEdited(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:text-white"
                    placeholder="Digite uma nova categoria"
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={nameCategory}
                    onChange={(e) => setNameCategory(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:text-white"
                    placeholder="Digite uma nova categoria"
                    required
                  />
                )}

              </div>
            </div>


            <button
              onClick={isEdit ? handleEditCategory : handleSubmit}
              type="submit"
              className="text-white text-center mt-2 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >

              {isLoading ? 'Carregando...' : 'Salvar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
