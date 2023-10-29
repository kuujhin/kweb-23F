CREATE TABLE `students` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `admission_year` YEAR NOT NULL,
    `department_id` INT NOT NULL,
    `student_id` INT NOT NULL,
    `department` VARCHAR(20) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `credit` INT NOT NULL DEFAULT 0,
    `gpa` FLOAT NOT NULL DEFAULT 0.0,
    `enroll` TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;