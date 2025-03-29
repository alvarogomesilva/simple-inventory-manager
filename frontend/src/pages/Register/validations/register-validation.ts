import { z } from "zod";

export const registerSchema = z.object({
    name: z.string()
    .nonempty("O nome é obrigatório"),
    email: z.string()
      .email("Digite um email válido")
      .nonempty("O email é obrigatório"),
    password: z.string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .nonempty("A senha é obrigatória"),
  });