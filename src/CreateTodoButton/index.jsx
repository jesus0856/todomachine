import { IoMdAdd } from "react-icons/io";

function CreateTodoButton({setOpenModal}) {
    return (
      <button 
        className="CreateTodoButton" 
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
      >
        < IoMdAdd/>
      </button>
    );
  }

  export {CreateTodoButton};