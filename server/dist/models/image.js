"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Image extends sequelize_1.Model {
}
Image.init({
    src: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "Image",
    tableName: "images",
    charset: "utf8",
    collate: "utf8_general_ci",
});
const associate = (db) => {
    db.Image.belongsTo(db.Post);
};
exports.associate = associate;
exports.default = Image;
