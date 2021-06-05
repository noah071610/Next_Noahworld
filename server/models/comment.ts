import {
  BelongsToManyAddAssociationsMixin,
  BelongsToManyRemoveAssociationsMixin,
  DataTypes,
  Model,
} from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class Comment extends Model {
  public id!: number;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public addCommentLikers!: BelongsToManyAddAssociationsMixin<Comment, number>;
  public removeCommentLikers!: BelongsToManyRemoveAssociationsMixin<Comment, number>;
}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.Comment.belongsTo(db.User);
  db.Comment.belongsTo(db.Post);
  db.Comment.hasMany(db.SubComment);
  db.Comment.belongsToMany(db.User, {
    through: "CommentLike",
    as: "CommentLikers",
  });
};

export default Comment;
