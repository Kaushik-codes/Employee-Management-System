const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve authentication issue on login page",
        date: "2026-03-15",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update dashboard UI",
        description: "Improve layout and responsiveness",
        date: "2026-03-14",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API docs",
        description: "Document all endpoints",
        date: "2026-03-13",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Setup database",
        description: "Initialize MongoDB schema",
        date: "2026-03-12",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve DB performance",
        date: "2026-03-11",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix API crash",
        description: "Handle null pointer issue",
        date: "2026-03-10",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code review",
        description: "Review PRs from team",
        date: "2026-03-09",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstname: "Arjun",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design landing page",
        description: "Create modern UI layout",
        date: "2026-03-08",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS bugs",
        description: "Resolve styling issues",
        date: "2026-03-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test responsiveness",
        description: "Check mobile layouts",
        date: "2026-03-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstname: "Reyansh",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement auth",
        description: "JWT based authentication",
        date: "2026-03-05",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Unit testing",
        description: "Write test cases",
        date: "2026-03-04",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix server bug",
        description: "Resolve crash issue",
        date: "2026-03-03",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Deploy app",
        description: "Push to production",
        date: "2026-03-02",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstname: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create reports",
        description: "Generate monthly reports",
        date: "2026-03-01",
        category: "Analytics",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix data errors",
        description: "Clean incorrect entries",
        date: "2026-02-28",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Analyze trends",
        description: "Study user activity",
        date: "2026-02-27",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

export const setLocalStorage = ()=>{  //loads the default data
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{ //returns the default data
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return {employees,admin}
}