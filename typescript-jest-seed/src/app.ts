class Student {
    private _name: string

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

class Class {
    private _name: number
    private _students: Student[]

    constructor(name: number) {
        this._name = name;
        this._students = [];
    }

    addStudent(student: Student): Class {
        this._students.push(student)
        return this;
    }

    get students(): Student[] {
        return this._students;
    }

    get name(): number {
        return this._name;
    }
}

export class School {
    private _classes: Class[]

    constructor(classes?: Class[]) {
        this._classes = classes ?? [];
    }

    get classes(): Class[] {
        return this._classes;
    }

    getAllStudentsOfAllClasses(): Map<Class, Student[]> {
        const studentsOfAllClasses = new Map<Class, Student[]>();
        this.classes.sort((a, b) => a.name - b.name).forEach(c => {
            studentsOfAllClasses.set(c, c.students.sort((a, b) => a.name.localeCompare(b.name)));
        });
        return studentsOfAllClasses;
    }
}

const school = new School([
    new Class(1)
        .addStudent(new Student('Patrick'))
        .addStudent(new Student('Andreas'))
        .addStudent(new Student('Max')),
    new Class(2)
        .addStudent(new Student('Schorsch'))
        .addStudent(new Student('Tadeus'))
        .addStudent(new Student('Maximilian'))
]);

console.log(school.getAllStudentsOfAllClasses());
