import app from "./server";
import config from "../config.json";
// import db from "./utils/database"
const db = require("./utils/database")

db.authenticate()
  .then(() => console.log("connected......"))
  .catch(() => console.log("error......"));

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 8080);
app.listen(port, () => {
  console.info("Express application started on port: " + port);
});
