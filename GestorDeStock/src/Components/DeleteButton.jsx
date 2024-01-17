import { useNavigate } from "react-router-dom"
import useStock from "../hook/useStock"

function DeleteButton ({itemId ,itemName}) {

const { deleteItem} =  useStock()
const navigate = useNavigate()

    const handleDelete = () => {
        if (confirm(`Deseja Excluir ${ itemName}`)) {
            deleteItem(itemId)
            navigate("/items")
        }
    }

    return(
        <button
            className="button is-danger is-small"
            onClick={handleDelete}
        >
            Excluir!
        </button>
    )
}

export default DeleteButton