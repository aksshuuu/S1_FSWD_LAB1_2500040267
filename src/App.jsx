import "./App.css";

function Employee(props) {
  return (
    <div className="employee-card">
      <div className="photo-container">
        <img src={props.photo} alt={props.name} className="employee-photo" />
        <span className="status-badge">Active</span>
      </div>
      
      <div className="employee-details">
        <h2>{props.name}</h2>
        <span className="id-badge">ID: {props.employeeId}</span>
        
        <div className="info-section">
          <p className="label">Department</p>
          <p className="value">{props.department}</p>
        </div>
        
        <div className="info-section">
          <p className="label">Role</p>
          <p className="value">{props.role}</p>
        </div>
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
      name: "Avinash Kumar",
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
      name: "Abhilash Reddy",
      employeeId: "2500040519",
      department: "Data Science",
      role: "ML Engineer",
      photo: "https://img.magnific.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79590.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Martin Reddy",
      employeeId: "2500040682",
      department: "Quality Assurance",
      role: "QA Automation",
      photo: "https://img.magnific.com/premium-vector/smiling-businessman-character-simple-vector_855703-375.jpg"
    }
  ];

  return (
    <div className="app">
      <div className="overlay"></div>
      <header className="header">
        <h1>Employee Information System</h1>
        <p className="subtitle">Interactive Team Directory</p>
      </header>

      <main className="employee-grid">
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
      </main>
    </div>
  );
}

export default App;