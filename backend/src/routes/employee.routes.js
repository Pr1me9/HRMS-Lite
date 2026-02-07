const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Add Employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department)
      return res.status(400).json({ message: "All fields are required" });

    const existing = await Employee.findOne({ employeeId });
    if (existing)
      return res.status(409).json({ message: "Employee ID already exists" });

    const employee = await Employee.create(req.body);
    res.status(201).json(employee);

  } catch {
    res.status(500).json({ message: "Error creating employee" });
  }
});

// View Employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch {
    res.status(500).json({ message: "Error fetching employees" });
  }
});

// Delete Employee
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Employee not found" });

    res.status(200).json({ message: "Employee deleted" });

  } catch {
    res.status(500).json({ message: "Error deleting employee" });
  }
});

module.exports = router;
