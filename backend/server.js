require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const courseRouter = require("./routes/course");
const connectMongoDB = require("./db/connectMongoDB");

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 4001;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDB();
});
