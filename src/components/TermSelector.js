import { terms } from "../utilities/course-constants";
import TermButton from "./TermButton";

const TermSelector = ({term, setTerm}) => (
    <div className="btn-group">
      {
        Object.values(terms).map(value => (
          <TermButton key={value} term={value} setTerm={setTerm} checked={value === term}/>
        ))
      }
    </div>
  );

export default TermSelector;