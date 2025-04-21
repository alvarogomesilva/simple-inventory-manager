export type Categories = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
};

export type CategoryEdit = {
    id: string;
    name: string;
}

export type ModalPropsCategories = {
  isOpen: boolean;
  onClose: () => void;
  isEdit?: boolean;
  editData?: CategoryEdit
}