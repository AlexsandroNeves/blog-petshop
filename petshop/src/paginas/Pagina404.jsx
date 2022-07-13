
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'
const Pagina404 = () => {
 return(

<main className='container flex flex--centro flex--coluna'>
    <img className='Ilustracao doguito' src={ imagem} alt="Erro na página" />
    <p className='naoencontrado-texto'>
        Ops, Essa página não existe!
    </p>
</main>
 )   
}

export default Pagina404;