import { CreateSupplierDto } from "../types/suppliers/create-supplier.dto";
import * as supplierRepository from '../repositories/supplier-repository';

export async function createNewSupplier(supplierData: CreateSupplierDto) {
    return await supplierRepository.create(supplierData)
}