import dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string;
};
interface ConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: ConfigGroup = {
  development: {
    username: "root",
    password: process.env.DB_PASS!,
    database: "portfolio_blog",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASS!,
    database: "portfolio_blog",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASS!,
    database: "portfolio_blog",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

export default config;
