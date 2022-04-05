import { getCourseTerm } from '../utilities/course-constants';
import { useState } from 'react';
import Course from "./Course";
import TermSelector from "./TermSelector";

const CourseList = ({ courses }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
    return(
      <>
        <TermSelector term={term} setTerm={setTerm} />
        <div className="course-list">
        { termCourses.map(course => 
            <Course key={ course.id} course={ course } selected={selected} setSelected={setSelected}/>) }
        </div>
      </>
    );
  };

export default CourseList;