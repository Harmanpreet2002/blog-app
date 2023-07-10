const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectWithRetry = require("./db/dbConnection");
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
connectWithRetry();
app.enable("trust proxy");

app.get("/api/v1", (req, res) => {
  res.send("<h1>Home Page</h1>");
  console.log(`yeah it ran`);
});

app.use(express.json());
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`The server is listening at the ${PORT}`);
});
