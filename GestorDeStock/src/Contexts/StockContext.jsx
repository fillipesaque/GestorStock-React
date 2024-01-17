import {createContext, useState } from "react";

const StockContext = createContext({})

function StockContextProvider ({children}) {
    const [ items , setItems] = useState(() => {
        const storedItems = localStorage.getItem('stock- storedItems')
        if(!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach(item => {
          item.createdAt = new Date(item.createdAt)
          item.updateAt = new Date(item.createdAt)
        });
    
        return items
      })
    
      const addItem = (item) => {
        setItems(currentState => {
          const updatedItems = [item , ... currentState]
          localStorage.setItem('stock- storedItems' , JSON.stringify(updatedItems))
          return updatedItems
        })
      }

      const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
      }

      const updateItem = (itemId , newAttributes) => {
        setItems(currentState => {
          const itemIndex = currentState.findIndex(item => item.id === +itemId)
          const updatedItems = [...currentState]
          Object.assign(updatedItems[itemIndex], newAttributes, {updateAt: new Date()})
          localStorage.setItem('stock- storedItems' , JSON.stringify(updatedItems))
          return updatedItems
        })
      }

      const deleteItem = (itemId) => {
        setItems(currentState => {
          const updateItems = currentState.filter(item => item.id !== itemId)
          localStorage.setItem('obc-react-stock' , JSON.stringify(updateItems))
          return updateItems
        })
      }
    
      const stock = {
        items , 
        addItem,
        getItem,
        deleteItem,
        updateItem
      }


    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}

export { StockContext , StockContextProvider , }

