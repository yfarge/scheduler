import { hasConflict } from "../utilities/times";
import { toggle } from "../utilities/schedule-helpers";
import { getCourseNumber, getCourseTerm } from "../utilities/course-constants";

const Course = ({course, selected, setSelected}) => {
    const isSelected = selected.includes(course);
    const isDisabled = !isSelected && hasConflict(course, selected);
    const style = {
      backgroundColor: isDisabled? 'lightgrey' : isSelected ? '#B0E5A4' : 'white'
    };
    return (
      <div className="card m-1 p-2"
        style={style}
        onClick={isDisabled ? null : () => setSelected(toggle(course, selected))}>
        <div className="card-body">
          <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
          <div className="card-text">{ course.title }</div>
          <div className="card-text">{ course.meets }</div>
        </div>
      </div>
    );
  };

export default Course;