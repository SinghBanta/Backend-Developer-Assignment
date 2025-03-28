const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
