import Header from '../components/Header'
import Produtos from '../components/Produtos'
import Categorias from '../components/Categorias'
import SearchProduct from '../components/SearchProduct'
import Footer from '../components/Footer'

function Main() {

    return (
        <>
            <Header />
            <SearchProduct />
            <Categorias />
            <Produtos />
            <Footer />
        </>
    )
}

export default Main
