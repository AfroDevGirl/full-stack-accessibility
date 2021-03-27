"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models["Task"].belongsTo(models["User"]);
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dueAt: DataTypes.DATE,
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Task",
      timestamps: true,
    }
  );
  return Task;
};
