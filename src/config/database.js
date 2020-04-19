require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: process.env.DATABASE_URL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionString: process.env.DB_HOST,
  ssl: true,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
