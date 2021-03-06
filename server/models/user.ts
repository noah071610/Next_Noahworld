import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class User extends Model {
  public readonly id!: number;
  public readonly googleId?: string;
  public email!: string;
  public name!: string;
  public icon?: string;
  public password?: string;
  public admin?: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: true,
    },
  },
  { sequelize, modelName: "User", tableName: "Users", charset: "utf8", collate: "utf8_general_ci" }
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Post);
  db.User.hasMany(db.Comment, { onDelete: "cascade" });
  db.User.hasMany(db.SubComment, { onDelete: "cascade" });
  db.User.belongsToMany(db.Post, {
    through: "PostLike",
    as: "PostLiked",
    onDelete: "cascade",
  });
  db.User.belongsToMany(db.Comment, {
    through: "CommentLike",
    as: "CommentLiked",
    onDelete: "cascade",
  });
};

export default User;
