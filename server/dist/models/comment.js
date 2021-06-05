"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Comment extends sequelize_1.Model {
}
Comment.init({
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Comment",
    tableName: "Comments",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
});
const associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
    db.Comment.hasMany(db.SubComment);
    db.Comment.belongsToMany(db.User, {
        through: "CommentLike",
        as: "CommentLikers",
    });
};
exports.associate = associate;
exports.default = Comment;
