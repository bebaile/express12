const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheCanGenerateTokens";

const calculateToken = (userEmail = "", userId) => {
  return jwt.sign({ email: userEmail, userId: userId }, PRIVATE_KEY);
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = { calculateToken, decodeToken };
