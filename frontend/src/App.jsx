import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API}/employees`);
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/employees`, form);
      setForm({
        employeeId: "",
        fullName: "",
        email: "",
        department: ""
      });
      fetchEmployees();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${API}/employees/${id}`);
    fetchEmployees();
  };

  const markAttendance = async () => {
    if (!selectedEmployee || !date) return;

    await axios.post(`${API}/attendance`, {
      employeeId: selectedEmployee,
      date,
      status
    });

    alert("Attendance marked!");
  };

  const viewAttendance = async () => {
    if (!selectedEmployee) return;

    const res = await axios.get(
      `${API}/attendance/${selectedEmployee}`
    );
    setAttendance(res.data);
  };

  return (
    <div className="container">
      <h1 className="title">HRMS LITE</h1>

      {/* Employee Section */}
      <div className="card">
        <h2>Add New Employee</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Employee ID"
            value={form.employeeId}
            onChange={(e) =>
              setForm({ ...form, employeeId: e.target.value })
            }
            required
          />

          <input
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
            required
          />

          <button className="btn">Add Employee</button>
        </form>
      </div>

      {/* Attendance Section */}
      <div className="card">
        <h2>Attendance Management</h2>

        <select
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.employeeId} value={emp.employeeId}>
              {emp.fullName}
            </option>
          ))}
        </select>

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <select onChange={(e) => setStatus(e.target.value)}>
          <option>Present</option>
          <option>Absent</option>
        </select>

        <div className="button-row">
          <button onClick={markAttendance} className="btn">
            Mark Attendance
          </button>
          <button onClick={viewAttendance} className="btn-secondary">
            View Records
          </button>
        </div>

        {attendance.length > 0 && (
          <div className="attendance-box">
            <h4>Total Records: {attendance.length}</h4>
            {attendance.map((a, i) => (
              <div key={i}>
                {a.date} - {a.status}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
