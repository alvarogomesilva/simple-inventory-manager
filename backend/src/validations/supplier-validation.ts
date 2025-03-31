
import { z } from "zod";

export const createSupplier = z.object({
    name: z.string().nonempty('Nome não pode ser vazio'),
    email: z.string().nonempty('Email não pode ser vazio')
})