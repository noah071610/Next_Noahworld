"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Quiz extends sequelize_1.Model {
}
Quiz.init({
    type: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    question: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    answer: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Quiz",
    tableName: "quizzes",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
});
const associate = (db) => {
    db.Comment.belongsTo(db.User);
};
exports.associate = associate;
exports.default = Quiz;
