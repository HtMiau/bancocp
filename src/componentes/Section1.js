
import Styles from './Section1.module.css'
import cartao from './img/cartaozao.png'
import AOS from 'aos';

function Section1(){
    
    return(
        <section className={Styles.sessão1}>
            <div data-aos="fade-right" className={Styles.texto1}>
                <h2 >O cartão de crédito CP é seu novo cartão de visita.</h2>
            </div>
            <div className={Styles.cartão}></div>

         
        </section>

        
    )
}

export default Section1