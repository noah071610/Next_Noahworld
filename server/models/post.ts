import { BelongsToManyAddAssociationsMixin, DataTypes, Model } from "sequelize";
import Comment from "./comment";
import { dbType } from "./index";
import { sequelize } from "./sequelize";
import User from "./user";

class Post extends Model {
  public id!: number;
  public hit?: number;
  public category!: "tech" | "daily";
  public thumbnail?: string;
  public imagePath?: string;
  public title!: string;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public PostLikers!: User[];
  public Comments!: Comment[];
  public addPostLikers!: BelongsToManyAddAssociationsMixin<Post, number>;
  public removePostLikers!: BelongsToManyAddAssociationsMixin<Post, number>;
  public addHashtags!: BelongsToManyAddAssociationsMixin<Post, string>;
}

Post.init(
  {
    hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imagePath: {
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
  db.Post.hasMany(db.Image);
  db.Post.hasMany(db.Comment);
  db.Post.hasMany(db.SubComment);
  db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
  db.Post.belongsToMany(db.User, {
    through: "PostLike",
    as: "PostLikers",
  });
};

export default Post;
