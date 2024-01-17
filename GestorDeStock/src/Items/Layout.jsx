import { Link, Outlet, useLocation } from "react-router-dom"

function ItemsLayout () {
const {pathname}  = useLocation() /* Hook que devolve o local atual onde vc esta , Devolve um objeto do local atual  */

    return(
        <main>
            <h1>Stock Items</h1>
            <div className="tabs">
                <Link to = '/items' className={`tab ${pathname === '/items' ? 'active' : ''}`}>Todos Os Items</Link>
                <Link to = '/items/new' className={`tab ${pathname === '/items/new'? 'active' : '' }`}> Novo Items</Link>
            </div>
            <Outlet/>
        </main>
    )
}

export default ItemsLayout