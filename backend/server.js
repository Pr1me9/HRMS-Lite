require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./src/routes/employee.routes");
const attendanceRoutes = require("./src/routes/attendance.routes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch(err => console.error(err));

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
