import { Link, Outlet } from "react-router-dom"

function RootLayout () {
    return(
        <>
            <header>
                <Link to = '/' className= 'logo'>REACT STOCK</Link>
                <nav>
                    <Link to = '/'> Inicio</Link>
                    <Link to = 'items'>Items</Link>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                <p>Feito Com React + React-Router</p>
            </footer>
        </>
    )
}

export default RootLayout