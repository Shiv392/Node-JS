const crypto = require('crypto');
const nonceCache = require('../cache.js'); // Make sure your cache has an expiry mechanism

const decryptData = (encrypted, ivBase64) => {
  const secretKey = "12345678901234567890123456789012"; // 32 bytes
  const iv = Buffer.from(ivBase64, "base64"); // decode the received IV

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey),
    iv
  );

  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
};

const userlogin = (req, res) => {
  try {
    const { data, iv } = req.body; // get data and iv from the client side
    const decrypted = decryptData(data, iv);
    console.log('decrypted ---------->', decrypted);

    const now = Date.now();
    const MAX_DELAY = 30 * 1000; // 30 seconds

    // Check for replay attack (nonces that are reused)
    if (nonceCache.has(decrypted.nonce)) {
      return res.status(403).json({ success: false, message: 'Replay detected' });
    }

    // Check for expiration based on timestamp
    if (!decrypted.timestamp || Math.abs(now - decrypted.timestamp) > MAX_DELAY) {
      return res.status(403).json({ success: false, message: 'Request expired' });
    }

    // Store the nonce in cache with expiration (e.g., 30 seconds)
    nonceCache.set(decrypted.nonce, true, MAX_DELAY / 1000); // Cache expiration in seconds

    // Your logic to authenticate and generate a response
    return res.status(200).json({ success: true, message: 'Login Successful', user: decrypted });

  } catch (err) {
    console.log('error--------->', err);
    res.status(502).json({ success: false, message: 'Server Error', error: err });
  }
};

module.exports = { userlogin };
