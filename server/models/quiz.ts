import { DataTypes, Model } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

class Quiz extends Model {
  public id!: number;
  public type!: string;
  public question!: string;
  public answer!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Quiz.init(
  {
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Quiz",
    tableName: "quizzes",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.Comment.belongsTo(db.User);
};

export default Quiz;
