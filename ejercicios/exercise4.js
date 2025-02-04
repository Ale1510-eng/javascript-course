const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

const comparingCourses = (student1Courses, student2Courses) => {
    return student1Courses.filter(course => student2Courses.includes(course));
}

const printOutCommonCourses = courses => {
    for (course of courses){
        console.log(course);
    }
}

printOutCommonCourses(comparingCourses(student1Courses,student2Courses));