import Styles from './Section4.module.css'
import logoapp from './img/fotoapp.png'
import cerura from './img/cerura.png'
import cartom from './img/cartom.png'
import vidiozin from "./img/vidiozin.mp4"

function Section4 (){
    return(
        <section className={Styles.sessão4}>

            
           
            <div className={Styles.img}>
                <img src={cerura}></img>
            </div>
            
            <div className={Styles.caixazonaa}>
                <div className={Styles.caixona}>

                    <div className={Styles.texto1}><h5>Baixe agora</h5></div>
                        <div className={Styles.cartom}></div>

                        <div className={Styles.caixinha}>
                            <div className={Styles.logoapp}></div>
                            <div className={Styles.aplle}></div>
                            <div className={Styles.android}></div>
                        </div>
                        
                </div>

            </div>
            
            
        </section>
    )
}
export default Section4