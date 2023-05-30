export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;  
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentClassConstructor{
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentclassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface{
  constructor(public firstName: string, public lastName: string) {}

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
