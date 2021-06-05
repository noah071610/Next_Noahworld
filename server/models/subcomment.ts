import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class SubComment extends Model {
  public id!: number;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

SubComment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SubComment",
    tableName: "subcomments",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.SubComment.belongsTo(db.User);
  db.SubComment.belongsTo(db.Post);
  db.SubComment.belongsTo(db.Comment);
};

export default SubComment;
