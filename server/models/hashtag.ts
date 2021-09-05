import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class Hashtag extends Model {
  public id!: number;
  public name!: string;
  public category!: "tech" | "daily";
  public createdAt!: Date;
  public updatedAt!: Date;
}

Hashtag.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Hashtag",
    tableName: "Hashtags",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);
export const associate = (db: dbType) => {
  db.Hashtag.belongsToMany(db.Post, {
    through: "PostHashtag",
    onDelete: "cascade",
  });
};

export default Hashtag;
