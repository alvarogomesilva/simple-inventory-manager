import { CreateUserDto } from "../types/create-user.dto";
import { compareSync, hashSync } from 'bcryptjs';
import * as userRepository from '../repositories/user-repository'
import { AuthUserDto } from "../types/auth-user.dto";
import { sign } from "jsonwebtoken";

export async function createNewUser(userData: CreateUserDto) {
    userData.password = hashSync(userData.password, 10)
    return await userRepository.create(userData)
}

export async function autenticate(authData: AuthUserDto) {
    const user = await userRepository.findByEmail(authData.email)

    if (!user) throw new Error('email/password incorretos')

    const passwordMatch = compareSync(authData.password, user.password)
    if (!passwordMatch) throw new Error('email/password incorretos')

    const token = sign({
        userId: user.id,
    }, process.env.JWT_SECRET as string, { subject: user.id, expiresIn: '1d' })

    return { token: token };
}

export async function detailUser(userId: string) {
    const user = await userRepository.finById(userId)

    if (!user) throw new Error('usuário inválido')

    return user

}