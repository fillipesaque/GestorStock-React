import { useContext } from "react";
import { StockContext } from "../Contexts/StockContext";

function useStock () {
    return useContext(StockContext)
}

export default useStock