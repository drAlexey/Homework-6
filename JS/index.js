const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
   
             //ФУНКЦИЯ 1 
//Повертає список предметів для конкретного студента.
//Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл.
getSubjects = (students) => Object.keys(students.subjects).map(n => n[0].toUpperCase() + n.slice(1).toLowerCase().replaceAll("_", " "))

console.log("список предметів для конкретного студента",getSubjects(students[0]));


            //ФУНКЦИЯ 2
//Поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку.
getAverageMark = (students) => ((Object.values(students.subjects)).flat().reduce((a,b) => a+b) / (Object.values(students.subjects)).flat().length).toFixed(2);

console.log("середня оцінка по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ",getAverageMark(students[0]));


            //ФУНКЦИЯ 3
//Повертає інформацію загального виду по переданому студенту.
//Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.
getStudentInfo = (students) => Object.assign(`"course": ${students.course}, "name": "${students.name}", "averageMark": ${((Object.values(students.subjects)).flat().reduce((a,b) => a+b) / (Object.values(students.subjects)).flat().length).toFixed(2)}` );

console.log('повертає інформацію загального виду по переданому студенту',getStudentInfo(students[0])); 
  
            //ФУНКЦИЯ 4
// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] –
// яка повертає імена студентів у алфавітному порядку.
getStudentsNames = students.map(item => item.name).sort();

console.log('повертає імена студентів у алфавітному порядку',getStudentsNames);
   

            //ФУНКЦИЯ 5
//Повертає кращого студента зі списку по показнику середньої оцінки.
getBestStudent = students.map((students) => students.name +" "+ ((Object.values(students.subjects)).flat().reduce((a,b) => a+b) / (Object.values(students.subjects)).flat().length).toFixed(2));

console.log(getBestStudent);


            //ФУНКЦИЯ 6
// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт,
// в якому ключі це букви у слові, а значення – кількість їх повторень.

