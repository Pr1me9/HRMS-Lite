const express = require("express");
const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");

const router = express.Router();

// Mark Attendance
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status)
      return res.status(400).json({ message: "All fields are required" });

    const employee = await Employee.findById(employeeId);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    const attendance = await Attendance.create({
      employee: employeeId,
      date,
      status
    });

    res.status(201).json(attendance);

  } catch {
    res.status(500).json({ message: "Error marking attendance" });
  }
});

// View Attendance by Employee
router.get("/:employeeId", async (req, res) => {
  try {
    const records = await Attendance.find({
      employee: req.params.employeeId
    });

    res.status(200).json(records);

  } catch {
    res.status(500).json({ message: "Error fetching attendance" });
  }
});

module.exports = router;
