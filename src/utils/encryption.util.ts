import * as crypto from 'crypto';
import 'dotenv/config';
const ALGORITHM = 'aes-256-cbc';
const KEY = process.env.ENCRYPTION_KEY!;
const IV = process.env.ENCRYPTION_IV!;

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    Buffer.from(KEY),
    Buffer.from(IV),
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
};

export const decrypt = (text: string) => {
  const encryptedText = Buffer.from(text, 'hex');
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    Buffer.from(KEY),
    Buffer.from(IV),
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
