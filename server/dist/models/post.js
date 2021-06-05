"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Post extends sequelize_1.Model {
}
Post.init({
    hit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    thumbnail: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    imagePath: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Post",
    tableName: "posts",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
});
const associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Image);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.SubComment);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
    db.Post.belongsToMany(db.User, {
        through: "PostLike",
        as: "PostLikers",
    });
};
exports.associate = associate;
exports.default = Post;
