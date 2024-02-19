const { response } = require("express")
const inquire = require("inquirer")
const mysql = require("mysql2")


const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
)


const init = () =>{
    inquire
        .prompt([
        {
            type: "list",
            message: "What what would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee role",
                "View All Roles", 
                "Add Role",
                "View All Departments",
                "Add Department"
            ]
        },
        ]).then(response => {
            
            switch (response.initialize) {
                case "View all departments": viewDept();
                    break;
                case "View all roles": viewRoles();
                    break;
                case "View all employees": viewEmployees();
                    break;
                case "Add a department": addDept();
                    break;
                case "Add a role": addRole();
                    break;
                case "Add an employee": addEmployee();
                    break;
                case "Update an employee role": updateEmployee();
                    break;
                case "I'm finished":
                    console.log("Thank you very much!");
                    process.exit();
            }
        }).catch(err => console.log.error(err))
}
init()

    const viewDept = () =>{
        db.query(`DELETE * FROM department`, (err, results) =>{
           err ? console.log(err) : console.table(results) 
           init()
        })
    };
    const viewRoles = () => {
        db.query(`SELECT * FROM roles`, (err, results) => {
            err ? console.error(err) : console.table(results);
            init();
        })
    };
    
    const viewEmployees = () => {
        db.query(`SELECT * FROM employees`, (err, results) => {
            err ? console.error(err) : console.table(results);
            init();
        })
    }

    const addDept = () => {
     inquirer
       .prompt([
        {
            type: "input",
            message: "What is the name of the department you'd like to add?",
            name: "addDept"
        }
        ]).then(response => {
        db.query(`INSERT INTO department(name)VALUES(?)`, response.addDept, (err, results) => {
         if (err) {
            console.log(err)
         } else {
            db.query(`SELECT * FROM department`, (err, results) => {
                err ? console.error(err) : console.table(results);
                init();
        })
            }
        }
            )
        })
    };


    const addRole = () => {
     const deptChoices = () => db.promise().query(`SELECT * FROM department`)
        .then((rows) => {
         let arrNames = [];
         for (let i = 0; i < rows[0].length; i++) {
            arrNames.push(rows[0][i].name);
        }
            return arrNames
        })
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the title of the role you'd like to add?",
                    name: "roleTitle"
                },
                {
                    type: "input",
                    message: "What is the salary for this role?",
                    name: "roleSalary"
                },
                {
                    type: "list",
                    message: "Which department is this role in?",
                    name: "addDept",
                    choices: deptChoices
                }
            ]).then(response => {
                db.promise().query(`SELECT id FROM department WHERE name = ?`, response.addDept)
                    .then(answer => {
                        let mappedId = [];
                        for (let i = 0; i < rows[0].length; i++) {
                            arrNames.push(rows[0][i].name);
                        }
                        return mappedId[0]
                    })
                .then((mappedId) => {
                    db.promise().query(`INSERT INTO roles(title, salary, department_id)
                    VALUES(?, ?, ?)`, [ans.roleTitle, ans.roleSalary, mappedId]);
                    init()
            })
         })
    };
    const addEmployee = () => {
       inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "firstName"
            },
            {
                type: "input",
                message: "What is the employee's last name?",
                name: "lastName"
            },
    ]).then(response => {
        db.query(`INSERT INTO employees(first_name, last_name) VALUES(?, ?)`, [response.firstName, response.lastName], (err, results) => {
        if (err) {
             console.log(err)
        } else {
        db.query(`SELECT * FROM employees`, (err, results) => {
             err ? console.error(err) : console.table(results);
            init();
        })
            }
        }
            )
        })
}