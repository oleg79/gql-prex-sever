const {
  schools,
  groups,
  teachers,
  students
} = require('./data');

const resolvers = {
  Query: {
    schools: () => schools,
    school: (_, {id}) => schools.find(s => s.id === id),

    groups: () => groups,
    group: (_, {id}) => groups.find(g => g.id === id),

    teachers: () => teachers,
    teacher: (_, {id}) => teachers.find(t => t.id === id),

    students: () => students,
    student: (_, {id}) => student.find(s => s.id === id),
  },

  School: {
    groups: ({id}) => groups.filter(g => g.schoolId === id),

    teachers: ({id}) => {
      const _groups = groups.filter(g => g.schoolId === id);

      return [...new Set(_groups.flatMap(
        g => teachers.filter(t => g.teacherIds.includes(t.id))
      ))];
    },

    students: ({id}) => {
      const _groups = groups.filter(g => g.schoolId === id);

      return [...new Set(_groups.flatMap(
        g => students.filter(s => g.studentIds.includes(s.id))
      ))]
    },
  },

  Group: {
    school: ({id}) => {
      const {schoolId} = groups.find(g => g.id === id);

      return schools.find(s => s.id = schoolId);
    },

    teachers: ({id}) => {
      const {teacherIds} = groups.find(g => g.id === id);

      return teachers.filter(t => teacherIds.includes(t.id));
    },

    students: ({id}) => {
      const {studentIds} = groups.find(g => g.id === id);

      return students.filter(s => studentIds.includes(s.id));
    }
  },

  Teacher: {
    groups: ({id}) => groups.filter(g => g.teacherIds.includes(id)),

    schools: ({id}) => {
      const schoolIds = [...new Set(groups.filter(g => g.teacherIds.includes(id)).map(g => g.schoolId))];

      return schools.filter(s => schoolIds.includes(s.id));
    },

    students: ({id}) => {
      const studentIds = [...new Set(groups.filter(g => g.teacherIds.includes(id)).flatMap(g => g.studentIds))]

      return students.filter(s => studentIds.includes(s.id));
    }
  },

  Student: {
    school: ({id}) => {
      const schoolId = groups.filter(g => g.studentIds.includes(id)).map(g => g.schoolId)[0]

      return schools.find(s => s.id === schoolId);
    },

    groups: ({id}) => groups.filter(g => g.studentIds.includes(id)),

    teachers: ({id}) => {
      const teachersIds = [...new Set(groups.filter(g => g.studentIds.includes(id)).flatMap(g => g.teacherIds))]

      return teachers.filter(t => teachersIds.includes(t.id));
    }
  }
};

module.exports = {
  resolvers
}
