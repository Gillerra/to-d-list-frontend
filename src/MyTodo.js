import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export const MyTodo = ({todo, updatingInInput, deleteTodo}) => {
    return(
        <div>
            <p>{todo}</p>
            <CiEdit onClick={updatingInInput}></CiEdit>
            <RiDeleteBin6Line onClick={deleteTodo}></RiDeleteBin6Line> 
        </div>
    )
}