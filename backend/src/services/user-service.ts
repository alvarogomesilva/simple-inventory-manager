import { CreateUserDto } from "../types/create-user.dto";
import { hashSync } from 'bcryptjs';
import * as userRepository from '../repositories/user-repository'

export async function createNewUser(userData: CreateUserDto) {
    userData.password = hashSync(userData.password, 10)
    return await userRepository.create(userData)
}
