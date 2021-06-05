import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class Hashtag extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Hashtag.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Hashtag",
    tableName: "hashtags",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);
export const associate = (db: dbType) => {
  db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
};

export default Hashtag;
