"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class SubComment extends sequelize_1.Model {
}
SubComment.init({
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize,
    modelName: "SubComment",
    tableName: "subcomments",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
});
const associate = (db) => {
    db.SubComment.belongsTo(db.User);
    db.SubComment.belongsTo(db.Post);
    db.SubComment.belongsTo(db.Comment);
};
exports.associate = associate;
exports.default = SubComment;
