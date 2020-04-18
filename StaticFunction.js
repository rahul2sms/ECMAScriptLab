class Collage
{
    constructor(collageName)
    {
        this.collageName = collageName;
    }
}

class Student extends Collage
{
    constructor(studentName, collageName)
    {
        super(collageName);
        this.studentName = studentName;
    }

    static findDetails(student)
    {
        console.log(`${student.studentName} has studied in ${student.collageName}`);
    }
}

const student = new Student("Rahul Jaiswal", "Great School");

Student.findDetails(student);