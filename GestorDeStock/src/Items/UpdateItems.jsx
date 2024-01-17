import { useParams } from "react-router-dom"
import ItemForm from "../Components/ItemForm"
import useStock from "../hook/useStock"

function UpdateItems () {
    const { getItem} = useStock()
    const { id } =useParams()
    const item = getItem(id)


    return(
        <>
            <h2>Att</h2>
            <ItemForm itemToUpdate={item}/>
        </>
    )
}

export default UpdateItems