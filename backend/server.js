const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "../backend/config/config.env" });
// }

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: 'dyxumpm4a',
  api_key: '849122369237317',
  api_secret: 'NT40GIQv0rOxeTwX2Dd32lfya2o',
});

const server = app.listen(4000, () => {
  console.log(`Server is working on http://localhost: 4000`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
