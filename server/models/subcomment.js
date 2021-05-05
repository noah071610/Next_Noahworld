module.exports = (sequelize, DataTypes) => {
  const SubComment = sequelize.define(
    "SubComment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  SubComment.associate = (db) => {
    db.SubComment.belongsTo(db.User);
    db.SubComment.belongsTo(db.Post);
    db.SubComment.belongsTo(db.Comment);
  };
  return SubComment;
};
