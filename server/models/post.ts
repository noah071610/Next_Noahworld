import {
  BelongsToManyAddAssociationsMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationsMixin,
  DataTypes,
  Model,
} from "sequelize";
import Comment from "./comment";
import { dbType } from "./index";
import { sequelize } from "./sequelize";
import User from "./user";

class Post extends Model {
  public id!: number;
  public hit?: number;
  public category!: "tech" | "daily";
  public thumbnail?: string;
  public title!: string;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public PostLikers!: User[];
  public Comments!: Comment[];
  public addPostLikers!: BelongsToManyAddAssociationsMixin<Post, number>;
  public removePostLikers!: BelongsToManyAddAssociationsMixin<Post, number>;
  public addHashtags!: BelongsToManyAddAssociationsMixin<Post, string>;
  public removeHashtags!: BelongsToManyRemoveAssociationsMixin<Post, number>;
  public getHashtags!: BelongsToManyGetAssociationsMixin<Post>;
}

Post.init(
  {
    hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "Posts",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.Post.belongsTo(db.User);
  db.Post.hasMany(db.Image, { onDelete: "cascade" });
  db.Post.hasMany(db.Comment, { onDelete: "cascade" });
  db.Post.hasMany(db.SubComment, { onDelete: "cascade" });
  db.Post.belongsToMany(db.Hashtag, {
    through: "PostHashtag",
    onDelete: "cascade",
    onUpdate: "cascade",
  });
  db.Post.belongsToMany(db.User, {
    through: "PostLike",
    as: "PostLikers",
    onDelete: "cascade",
  });
};

export default Post;
