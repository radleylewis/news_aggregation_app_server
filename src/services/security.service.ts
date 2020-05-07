import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const hashPassword = (password: string) => {
  const saltRounds = +process.env.SALT_ROUNDS;
  return hash(password, saltRounds);
};

const comparePassword = (password: string, userHash: string) => {
  return compare(password, userHash);
};

const generateToken = (email: string, userId: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtExpiry = process.env.JWT_EXPIRY;
  return jwt.sign({ email, userId }, jwtSecret, { expiresIn: jwtExpiry });
};

export {
  hashPassword,
  comparePassword,
  generateToken,
};