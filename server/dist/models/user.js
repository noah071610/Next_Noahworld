"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class User extends sequelize_1.Model {
}
User.init({
    googleId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    recentView: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    recentComment: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        unique: true,
    },
}, { sequelize: sequelize_2.sequelize, modelName: "User", tableName: "Users", charset: "utf8", collate: "utf8_general_ci" });
const associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.SubComment);
    db.User.hasMany(db.Quiz);
    db.User.belongsToMany(db.Post, {
        through: "PostLike",
        as: "PostLiked",
    });
    db.User.belongsToMany(db.Comment, {
        through: "CommentLike",
        as: "CommentLiked",
    });
};
exports.associate = associate;
exports.default = User;
