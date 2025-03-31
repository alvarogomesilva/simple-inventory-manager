import { z } from "zod";


export const createCategory = z.object({
    name: z.string().nonempty('Nome não pode ser vazio'),
})