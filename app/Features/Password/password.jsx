import bcrypt from "bcryptjs";

export default async function SaltAndHashPassword(password) {
  return await bcrypt.hash(password, 12);
}
