
// * SQL:
// 1. Tạo project 'school':
// CREATE SCHEMA `school` ;


// 2. Tạo bảng 'students':
// CREATE TABLE `school`.`students` (
//     `ID` INT NOT NULL,
//     `Name` VARCHAR(45) NOT NULL,
//     `Age` INT NULL,
//     `Status` VARCHAR(255) NULL,
//     PRIMARY KEY (`ID`));


// 3. Tạo dữ liệu bảng:
// INSERT INTO `school`.`students` (`ID`, `Name`, `Age`, `Status`) VALUES ('1', 'Nguyễn Văn A', '20', '1');
// INSERT INTO `school`.`students` (`ID`, `Name`, `Age`, `Status`) VALUES ('2', 'Nguyễn Văn B', '21', '1');
// INSERT INTO `school`.`students` (`ID`, `Name`, `Age`, `Status`) VALUES ('3', 'Nguyễn Văn C', '25', '0');


// 4. CRUD:
// USE school

// a. Create:
// INSERT INTO `students` VALUES ('4', 'Nguyễn Văn D', '24', '0');

// b. Read:
// SELECT * FROM `students`;
// SELECT * FROM `students` WHERE `ID` = 2;
// SELECT * FROM `students` WHERE `ID` = 2;

// c. Update:
// UPDATE `students` SET `status` = 0 WHERE `ID` = 2;

// d. Delete:
// DELETE FROM `students` WHERE `ID` = 3;

