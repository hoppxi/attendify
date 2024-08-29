-- Insert initial data into companies
INSERT INTO companies (company_name, description, phone_number, email, password_hash) VALUES
('TechCorp', 'Leading tech company specializing in educational software.', '123-456-7890', 'contact@techcorp.com', 'hashedpassword123'),
('EduSoft', 'Education technology company providing various learning solutions.', '987-654-3210', 'info@edusoft.com', 'anotherhashedpassword456');

-- Insert initial data into schools
INSERT INTO schools (company_id, school_name, address, description) VALUES
(1, 'Tech High School', '123 Tech Lane, Silicon Valley, CA', 'A premier high school focused on technology education.'),
(2, 'Edu Academy', '456 Edu Drive, Learning City, TX', 'An academy dedicated to innovative teaching methods.');

-- Insert initial data into company_admins
INSERT INTO company_admins (company_id, full_name, phone_number) VALUES
(1, 'Alice Johnson', '111-222-3333'),
(1, 'Bob Smith', '444-555-6666'),
(2, 'Carol White', '777-888-9999');

-- Insert initial data into school_admins
INSERT INTO school_admins (school_id, full_name, phone_number) VALUES
(1, 'Dan Brown', '222-333-4444'),
(2, 'Eve Davis', '555-666-7777');

-- Insert initial data into students
INSERT INTO students (school_id, first_name, last_name, email, username, phone_number, birthday, gender, grade, stream, section, qr_code_path, profile_path, mother_id, father_id, password) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'johndoe', '123-456-7891', '2005-05-15', 'Male', '10', 'Science', 'A', '/qr_codes/john_doe.png', '/profiles/john_doe.png', NULL, NULL, 'studentpassword123'),
(1, 'Jane', 'Smith', 'jane.smith@example.com', 'janesmith', '123-456-7892', '2005-07-22', 'Female', '10', 'Arts', 'B', '/qr_codes/jane_smith.png', '/profiles/jane_smith.png', NULL, NULL, 'studentpassword456'),
(2, 'Emily', 'Johnson', 'emily.johnson@example.com', 'emilyjohnson', '123-456-7893', '2006-02-10', 'Female', '9', 'Commerce', 'C', '/qr_codes/emily_johnson.png', '/profiles/emily_johnson.png', NULL, NULL, 'studentpassword789');

-- Insert initial data into parents
INSERT INTO parents (student_id, first_name, last_name, role, email, username, password, job) VALUES
(1, 'Michael', 'Doe', 'Father', 'michael.doe@example.com', 'michaeldoe', 'parentpassword123', 'Engineer'),
(1, 'Sarah', 'Doe', 'Mother', 'sarah.doe@example.com', 'sarahdoe', 'parentpassword456', 'Teacher'),
(2, 'James', 'Smith', 'Father', 'james.smith@example.com', 'jamessmith', 'parentpassword789', 'Doctor'),
(2, 'Linda', 'Smith', 'Mother', 'linda.smith@example.com', 'lindasmith', 'parentpassword012', 'Nurse'),
(3, 'Robert', 'Johnson', 'Father', 'robert.johnson@example.com', 'robertjohnson', 'parentpassword345', 'Artist'),
(3, 'Patricia', 'Johnson', 'Mother', 'patricia.johnson@example.com', 'patriciajohnson', 'parentpassword678', 'Writer');
