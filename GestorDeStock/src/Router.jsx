import {createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Pages/RootLayout'
import ListItems from './Items/ListItems'
import CreateItems from './Items/CreateItems'
import ShowItems from './Items/ShowItems'
import UpdateItems from './Items/UpdateItems'
import ItemsLayout from './Items/Layout'


const router = createBrowserRouter ([{
    path: '/' ,
    element:<RootLayout/>,  /* Componente Raiz da Aplicaçao */
    children: [
        {index: true, element: <Home/> }, /* Tela Principal De boas vindar '/' */
        {
            path: 'items', /* Caminho da rota , Items */
            element: <ItemsLayout/>, /* Layout especifico da paginas de items */
            children:[
                /* Funcionalidades que tera dentro da pagina ItemLayout */
                {index: true , element: <ListItems/>},          /* localhost3000/items*/
                {path: 'new' , element: <CreateItems/>},         /* localhost3000/items/new*/
                {path: ':id' , element: <ShowItems/>},           /* localhost3000/items/id*/
                {path: ':id/update' , element: <UpdateItems/>}, /* localhost3000/items/id/update*/
            ]
        }
    ]
}])

export default router