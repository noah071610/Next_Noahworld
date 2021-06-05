"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Hashtag extends sequelize_1.Model {
}
Hashtag.init({
    name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Hashtag",
    tableName: "hashtags",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
});
const associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
};
exports.associate = associate;
exports.default = Hashtag;
