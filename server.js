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
        }




        ])
}
init()