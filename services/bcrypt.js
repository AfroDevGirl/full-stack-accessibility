const bcrypt = require("bcrypt");
const crypto = require("crypto");

class BCrypt {
  constructor() {
    this.saltRounds = 10;
  }

  async generateHash(plainPassword) {
    return await bcrypt.hash(plainPassword, this.saltRounds);
  }

  async validatePassword(userPassword, passwordToCheck) {
    return await bcrypt.compare(passwordToCheck, userPassword);
  }

  async secretSession() {
    const randomStr = crypto.randomBytes(20).toString("hex");
    return await bcrypt.hash(randomStr, this.saltRounds);
  }
}

module.exports = BCrypt;
