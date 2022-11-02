INSERT INTO department (name)
VALUES  
    ("Engineering"),
    ("Marketing"),
    ("Sales");
        
INSERT INTO position (title, salary, department_id)
VALUES  
    ("Senior Software Engineer", "145000", 1),
    ("Software Engineer", "105000", 1),
    ("Marketing Manager", "85000", 2),
    ("Marketing Specialist", "60000", 2),
    ("Sales Manager", "120000", 3),
    ("Sales Specialist", "75000", 3);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES  
    ("Bradley", "McMullen", 1, null),
    ("Tina", "Burell", 2, 1),
    ("Julio", "Alvarez", 2, 1),
    ("Michone", "Washington", 1, null),
    ("Talia", "Smith", 2, 4),
    ("John", "Weber", 2, 4),
    ("Alicia", "Newton", 3, null),
    ("Michael", "Bairn", 4, 7),
    ("Shandra", "Brown", 4, 7),
    ("Juliana", "Perez", 5, null),
    ("Arturo", "Baez", 6, 10),
    ("Michelle", "Bailey", 6, 10),
    ("Don", "Michaels", 5, null),
    ("Richard", "Powell", 6, 13),
    ("Anish", "Tamizmani", 6, 13);
