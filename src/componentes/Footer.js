import Styles from './Footer.module.css'


function Footer (){
    return(
        <footer>
            <div className={Styles.img3}></div>
            
            <div className={Styles.info}>
                <h5>Outras Informações:</h5>
                <h6>Política de Privacidade
                Termos de Uso
                Trabalhe Conosco
                Nosso Blog
                </h6>

            </div>
            <div className={Styles.ende}>
            <h5>Endereço e contato:</h5>
                <h6>Rua Tito 54, Lapa - SP
                exemplo@jmbank.com.br
                (99) 99999-9999
                Atendimento Acessível
                </h6>
            </div>

        </footer>
    )
}
export default Footer