"use strict";
const { Model } = require("sequelize");
const BCrypt = require("../services/bcrypt");
const bc = new BCrypt();

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models["User"].hasMany(models["Task"]);
      models["User"].hasMany(models["UserSession"]);
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      settings: DataTypes.JSONB,
    },
    {
      hooks: {
        beforeCreate: async (user, _options) => {
          const hashedPassword = await bc.generateHash(user.password);
          user.password = hashedPassword;
        },
      },
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );
  return User;
};
