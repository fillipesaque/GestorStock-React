import { useState } from "react"
import { CATEGORIES, Stockitem } from "../entities/StockItem"
import useStock from "../hook/useStock"


function ItemForm ({itemToUpdate}) {

    const defaulItem = {
        name: '',
        description: '' ,
        quantity: '' , 
        price: 0 ,
        category: '' ,
    }

    const [item , setItem] = useState( itemToUpdate ? itemToUpdate: defaulItem)

    const {addItem,  updatedItem} = useStock()

    const handleChange = (ev) => {
        setItem(currentState => {
            return{
                ... currentState,
                [ev.target.name] : ev.target.value
            }
        })
    }

    const hundleSubmit = (ev) => {
        ev.preventDefault()

        try {
            if(itemToUpdate) {
              updatedItem(itemToUpdate.id , item)
              alert('item att com sucesso')
            } else{
              const validItem = new Stockitem(item)
              addItem(validItem)
              alert('Item Cadastrado com Sucesso')
              setItem(defaulItem)
            }
            
        } catch (err) {
            console.log(err.message)
        }
    }


    return (
        <>
            <form onSubmit={hundleSubmit} >
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={0}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            min={0.00}
            step={0.01}
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            required
            value={item.category}
            onChange={handleChange}
          >
            <option disabled value="">Selecione uma categoria...</option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          required
          rows={6}
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="button is-primary is-large">
        Salvar
      </button>
    </form>
        </>
    )
}

export default ItemForm