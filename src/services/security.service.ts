import { hash } from 'bcryptjs';


const hashPassword = async (password: string) => {
  const saltRounds = +process.env.SALT_ROUNDS;
  const result = await hash(password, saltRounds);
  return result;
};

export {
  hashPassword,
};