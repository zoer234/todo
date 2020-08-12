const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const todo = require("./routes/todo");
const app = express();

app.use(express.json());

app.use("/api/v1/todo", todo);

const PORT = process.env.PORT || 5600;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
