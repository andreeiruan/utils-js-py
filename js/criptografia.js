const crypto = require('crypto');

function criptografar(string) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.scryptSync('chave-secreta', 'salt', 24);
  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(string, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function descriptografar(string) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.scryptSync('chave-secreta', 'salt', 24);
  const iv = Buffer.alloc(16, 0);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(string, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
