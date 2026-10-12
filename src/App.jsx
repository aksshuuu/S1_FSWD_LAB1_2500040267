import React from 'react';
import './App.css';

function Employee(props) {
  return (
    <div className="employee-card">
      <img src={props.photo} alt={props.name} className="employee-photo" />
      <div className="employee-details">
        <h3>{props.name}</h3>
        <span className="status-badge">Active</span>
        <p><strong>ID:</strong> {props.employeeId}</p>
        <p><strong>Dept:</strong> {props.department}</p>
        <p><strong>Role:</strong> {props.role}</p>
      </div>
    </div>
  );
}

function App() {
  const employees = [
    {
      name: "Akshay Reddy",
      employeeId: "2500040267",
      department: "Full Stack Development",
      role: "Lead Engineer",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChNaZ3X6kJftfuYcrqCLIZwKKoFAbimWUUcMJzjQVz_sFt1LSKNOgUfQ&s=10"
    },
    {
      name: "Martin Linso",
      employeeId: "2500040288",
      department: "Full Stack Development",
      role: "Junior Developer",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozVZiMZMTsRjXtiIVRgoFQ_VovhceBx-_yFNleRZwFEwe4A0QrPxb23T-&s=10"
    },
    {
      name: "Nikhil Reddy",
      employeeId: "2500040312",
      department: "UX/UI Design",
      role: "Product Designer",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zdeFAKkmTvJpbvGRSuCH8aaUjxNXleMgkcsoTbSRUQ&s=10"
    },
    {
      name: "Lohith Reddy",
      employeeId: "2500040445",
      department: "Management",
      role: "Project Manager",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8ZS-EsEgytdOBaawduBwz9ZSNpk_ESTE7RyZ_fwBJw&s=10"
    },
    {
      name: "Abhilash",
      employeeId: "2500040519",
      department: "Data Science",
      role: "ML Engineer",
      photo: "https://img.magnific.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79590.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Junaid Shaik",
      employeeId: "2500040682",
      department: "Quality Assurance",
      role: "QA Automation",
      photo: "https://img.magnific.com/premium-vector/smiling-businessman-character-simple-vector_855703-375.jpg"
    }
  ];

  return (
    <div className="app-container">
      {/* Dark Blue Header Box */}
      <header className="top-header">
        <div className="logo-section">
          <h1>👥 EmployeeTrack</h1>
          <p>Employee Information System</p>
        </div>
      </header>

      <main className="main-content">
        <div className="dashboard-header">
          <h2>Team Directory Dashboard</h2>
          <p>View employee profiles, roles, and department details.</p>
        </div>

        {/* Minimized Stat Badges */}
        <div className="stats-container">
          <div className="stat-badge"><span>6</span> Total Employees</div>
          <div className="stat-badge"><span>4</span> Departments</div>
          <div className="stat-badge"><span>6</span> Active Status</div>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search employee, role, or department..." className="search-bar" />
        </div>
        
        {/* Employee Cards */}
        <div className="employee-grid">
          {employees.map((emp) => (
            <Employee
              key={emp.employeeId}
              name={emp.name}
              photo={emp.photo}
              employeeId={emp.employeeId}
              department={emp.department}
              role={emp.role}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;