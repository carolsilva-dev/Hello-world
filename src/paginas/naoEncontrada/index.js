import BotaoPrincipal from "componentes/botaoPrincipal";
import styles from "./naoEncontrada.module.css";
import error404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom";


export default function NaoEncontrada() {
    const navegar = useNavigate()
     return (
       
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrafo}>
            Aguarde uns instantes e recarregue a página, ou volte para a pagina inicial.
            </p>

            <div className={styles.botaoContainer}
                 onClick={() => navegar("/")}
            >
                <BotaoPrincipal tamanho="lg">
                    Voltar
                </BotaoPrincipal>
            </div>
            <img className={styles.imagemCachorro}
                   src={error404}
                   alt="Cachorro de óculos e vestido como humano"
             />
                  <div className={styles.espacoEmBranco}>
                  </div> 
         </div>
        </>
     )
}