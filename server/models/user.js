module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      icon: {
        type: DataTypes.TEXT("medium"),
        allowNull: true,
      },
      recentView: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recentComment: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        unique: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.SubComment);
    db.User.hasMany(db.Quiz);
    db.User.belongsToMany(db.Post, {
      through: "PostLike",
      as: "PostLiked",
    });
    db.User.belongsToMany(db.Comment, {
      through: "CommentLike",
      as: "CommentLiked",
    });
  };
  return User;
};
