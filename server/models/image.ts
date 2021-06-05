import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class Image extends Model {
  public id!: number;
  public src!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Image.init(
  {
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Image",
    tableName: "images",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.Image.belongsTo(db.Post);
};

export default Image;
