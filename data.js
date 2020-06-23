const schools = [
  {
    id: 1,
    name: 'school-1',
  },
  {
    id: 2,
    name: 'school-2',
  }
]

const groups = [
  {id: 1, name: 'group-1', schoolId: 1, teacherIds: [1,2,4], studentIds: [1,4,7]},
  {id: 2, name: 'group-2', schoolId: 1, teacherIds: [1,2,4], studentIds: [1,3,9]},
  {id: 3, name: 'group-3', schoolId: 1, teacherIds: [1,2], studentIds: [3,1,4]},

  {id: 4, name: 'group-4', schoolId: 2, teacherIds: [1,2,4], studentIds: [2]},
  {id: 5, name: 'group-5', schoolId: 2, teacherIds: [2,3,4], studentIds: [5,6]},
  {id: 6, name: 'group-6', schoolId: 2, teacherIds: [1,2,3], studentIds: [5,6,8]},
]

const teachers = [
  {id: 1, username: 'teacher-1', firstName: 'Oliver', lastName: 'Smith'},
  {id: 2, username: 'teacher-2', firstName: 'Harry', lastName: 'Johnson'},
  {id: 3, username: 'teacher-3', firstName: 'Olivia', lastName: 'Williams'},
  {id: 4, username: 'teacher-4', firstName: 'Noah', lastName: 'Jones'},
]

const students = [
  {id: 1, username: 'student-1', firstName: 'Oscar', lastName: 'Brown'},
  {id: 2, username: 'student-2', firstName: 'Ava', lastName: 'Davis'},
  {id: 3, username: 'student-3', firstName: 'Charlie', lastName: 'Miller'},
  {id: 4, username: 'student-4', firstName: 'Isabella', lastName: 'Wilson'},
  {id: 5, username: 'student-5', firstName: 'Muhammad', lastName: 'Moore'},
  {id: 6, username: 'student-6', firstName: 'Leo', lastName: 'Taylor'},
  {id: 7, username: 'student-7', firstName: 'Jacob', lastName: 'Anderson'},
  {id: 8, username: 'student-8', firstName: 'Jack', lastName: 'Thomas'},
  {id: 9, username: 'student-9', firstName: 'Ella', lastName: 'Jackson'},
]

module.exports = {
  schools,
  groups,
  teachers,
  students
}
