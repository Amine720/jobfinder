const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
// const path = require("path");

app.use(cors());
app.use("/client/uploads", express.static("client/uploads"));
app.use("/cv/client/uploads/client/uploads", express.static("client/uploads"));
app.use("/detail/client/uploads", express.static("client/uploads"));
app.use("/applicants/client/uploads/", express.static("client/uploads"));
app.use("/cv/client/uploads/", express.static("client/uploads"));
app.use("/search/client/uploads/", express.static("client/uploads"));

// app.use(express.static(path.join(__dirname, "client/uploads")));
connectDB();
app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/users"));
app.use("/api/job", require("./routes/api/jobs"));
app.use("/api/mail", require("./routes/api/mail"));

app.listen("4545", () => {
  console.log("Running on port 4545...");
});
