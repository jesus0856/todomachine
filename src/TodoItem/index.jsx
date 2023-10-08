import { BsCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";





function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick = {props.onComplete} 
        >
          <BsCheckCircleFill />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span 
          className="Icon Icon-delete"
          onClick = {props.onDelete}
        >
          
          <RiCloseCircleFill/>
          </span>
      </li>
    );
  }

  export {TodoItem};