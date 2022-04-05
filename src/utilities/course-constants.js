export const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};

export const getCourseTerm = course => (
    terms[course.id.charAt(0)]
  );

export const getCourseNumber = course => (
    course.id.slice(1, 4)
);