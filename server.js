const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDb();
const app = express();

app.use(express.json())

port=process.env.PORT || 5001

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
