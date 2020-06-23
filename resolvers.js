const {
  schools,
  groups,
  teachers,
  students
} = require('./data');

const applyFilters = (items, filters) => Object.entries(filters)
  .reduce((data, [field, value]) => data.filter(d => value ? d[field].includes(value) : true), items)

const resolvers = {
  Query: {
    schools: () => schools,
    school: (_, {id}) => schools.find(s => s.id === id),

    groups: () => groups,
    group: (_, {id}) => groups.find(g => g.id === id),

    teachers: () => teachers,
    teacher: (_, {id}) => teachers.find(t => t.id === id),

    students: () => students,
    student: (_, {id}) => students.find(s => s.id === id),
  },

  School: {
    groups: ({id}, filters) => applyFilters(groups
      .filter(g => g.schoolId === id), filters),

    teachers: ({id}, filters) => {
      const _groups = groups.filter(g => g.schoolId === id);

      return  applyFilters([...new Set(_groups.flatMap(
        g => teachers.filter(t => g.teacherIds.includes(t.id))
      ))], filters);
    },

    students: ({id}, filters) => {
      const _groups = groups.filter(g => g.schoolId === id);

      return applyFilters([...new Set(_groups.flatMap(
        g => students.filter(s => g.studentIds.includes(s.id))
      ))], filters);
    },
  },

  Group: {
    school: ({id}) => {
      const {schoolId} = groups.find(g => g.id === id);

      return schools.find(s => s.id = schoolId);
    },

    teachers: ({id}, filters) => {
      const {teacherIds} = groups.find(g => g.id === id);

      return applyFilters(teachers.filter(t => teacherIds.includes(t.id)), filters);
    },

    students: ({id}, filters) => {
      const {studentIds} = groups.find(g => g.id === id);

      return applyFilters(students.filter(s => studentIds.includes(s.id)), filters);
    }
  },

  Teacher: {
    groups: ({id}) => groups.filter(g => g.teacherIds.includes(id)),

    schools: ({id}) => {
      const schoolIds = [...new Set(groups.filter(g => g.teacherIds.includes(id)).map(g => g.schoolId))];

      return schools.filter(s => schoolIds.includes(s.id));
    },

    students: ({id}, filters) => {
      const studentIds = [...new Set(groups.filter(g => g.teacherIds.includes(id)).flatMap(g => g.studentIds))]

      return applyFilters(students.filter(s => studentIds.includes(s.id)), filters);
    }
  },

  Student: {
    school: ({id}) => {
      const schoolId = groups.filter(g => g.studentIds.includes(id)).map(g => g.schoolId)[0]

      return schools.find(s => s.id === schoolId);
    },

    groups: ({id}, filters) => applyFilters(groups.filter(g => g.studentIds.includes(id)), filters),

    teachers: ({id}, filters) => {
      const teachersIds = [...new Set(groups.filter(g => g.studentIds.includes(id)).flatMap(g => g.teacherIds))]

      return applyFilters(teachers.filter(t => teachersIds.includes(t.id)), filters);
    }
  }
};

module.exports = {
  resolvers
}
