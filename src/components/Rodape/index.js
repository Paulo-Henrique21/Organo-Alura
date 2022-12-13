import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='elementos-rodape'>
                <div className='social'>
                    <img src='./imagens/fb.png'/>
                    <img src='./imagens/tw.png'/>
                    <img src='./imagens/ig.png'/>
                </div>
                <img src='./imagens/logo.png'/>
                <h3>Desenvolvido por Paulo</h3>
            </div> 
        </footer>
    )
}

export default Rodape