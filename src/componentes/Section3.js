import Styles from './Section3.module.css'
import sorriso from './img/img4.png'


function Section3 (){
    return(
        <section className={Styles.sessão3} >
            <div className={Styles.fundo}>
                <div className={Styles.texto1}>
                    <h5>Venha facilitar e otimizar as suas finanças conosco.</h5>
                    <p>Descubra melhores maneiras de agilizar as suas transações econômicas em todos os sentidos.</p>
                </div>
                <div className={Styles.imagem} >
                    <img src={sorriso}></img>
                </div>
            </div>
        </section>

    )
}
export default Section3