-- Create the companies table
CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    phone_number VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

-- Create the schools table
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    school_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    address TEXT,
    description TEXT,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Create the company_admins table
CREATE TABLE company_admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Create the school_admins table
CREATE TABLE school_admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

-- Create the students table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    birthday DATE,
    gender ENUM('Male', 'Female', 'Other'),
    grade VARCHAR(50),
    stream VARCHAR(50),
    section VARCHAR(50),
    qr_code_path VARCHAR(255),
    profile_path VARCHAR(255),
    mother_id INT,
    father_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL,
    FOREIGN KEY (mother_id) REFERENCES parents(id),
    FOREIGN KEY (father_id) REFERENCES parents(id)
);

-- Create the parents table
CREATE TABLE parents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role ENUM('Mother', 'Father') NOT NULL,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    job VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE SET NULL
);

-- Indexes for optimization
CREATE INDEX idx_companies_email ON companies(email);
CREATE INDEX idx_schools_company ON schools(company_id);
CREATE INDEX idx_students_school ON students(school_id);
CREATE INDEX idx_students_mother ON students(mother_id);
CREATE INDEX idx_students_father ON students(father_id);
CREATE INDEX idx_parents_student ON parents(student_id);
