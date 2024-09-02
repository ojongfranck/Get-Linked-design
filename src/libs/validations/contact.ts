import { z } from "zod";
import { emailSchema, stringSchema } from ".";

const ContactValidator = z
  .object({
    firstName: stringSchema,
    email: emailSchema,
    message: stringSchema.min(100).max(500),
  })
//   .partial();

type TContactValidator = z.infer<typeof ContactValidator>;

export { ContactValidator, type TContactValidator };
