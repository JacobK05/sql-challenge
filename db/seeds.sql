INSERT INTO department(id, department_name)
VALUES 
        (1, "Engineering");
        (2, "Finance");
        (3, "Legal");
        (4, "Sales");

INSERT INTO role(id, title, department, salary)
VALUES
        (1, "Sales lead", 4, 100000);      
        (2, "Salesperson", 4, 80000);     
        (3, "Lead Engineer", 1, 150000);        
        (4, "Software Engineer", 1, 120000);        
        (5, "Account Manager", 2, 160000);        
        (6, "Accountant", 2, 125000);        
        (7, "Legal Team lead", 3, 250000);        
        (8, "Lawyer", 3, 190000);      


INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES 
        (1, "John", "Doe", 1, "null");
        (2, "Mike", "Chan", 2, "John Doe");
        (3, "Ashley", "Rodriguez", 3, "null");
        (4, "Kevin", "Tupik", 4, "Ashley Rodriguez");
        (5, "Kunal", "Singh", 5, "null");
        (6, "Malia", "Brown", 6, "Kunal Singh");
        (7, "Sarah", "Lourd", 7, "null");
        (8, "Tom", "Allen", 8, "Sarah Lourd");