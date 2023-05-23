interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;  
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentClassConstructor{
  new (firstName: string, lastName: string): classInterface;
}

interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements classInterface{
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework = (): string => {
    return 'Currently working';
  }

  displayName = (): string => {
    return this.firstName;
  }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName())
console.log(student.workOnHomework())
