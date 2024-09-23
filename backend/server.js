require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const courseRouter = require("./routes/course");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4001;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
