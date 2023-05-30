export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'King',
  lastName: 'Loco',
  experienceTeachingC: 10,
}

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher())

console.log('React');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher())
