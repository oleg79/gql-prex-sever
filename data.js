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
  {id: 1, username: 'teacher-1',},
  {id: 2, username: 'teacher-2',},
  {id: 3, username: 'teacher-3',},
  {id: 4, username: 'teacher-4',},
]

const students = [
  {id: 1, username: 'student-1',},
  {id: 2, username: 'student-2',},
  {id: 3, username: 'student-3',},
  {id: 4, username: 'student-4',},
  {id: 5, username: 'student-5',},
  {id: 6, username: 'student-6',},
  {id: 7, username: 'student-7',},
  {id: 8, username: 'student-8',},
  {id: 9, username: 'student-9',},
]

module.exports = {
  schools,
  groups,
  teachers,
  students
}
