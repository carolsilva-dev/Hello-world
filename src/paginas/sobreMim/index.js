import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./sobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
    return (
     <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
     >
      <h3 className={styles.subtitulo}>
         Olá, eu sou a Carol!
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto da Carol sorrindo"
        className={styles.fotoSobreMim}
      />

    <p className={styles.paragrafo}>
        Olá, sou a Caroline Oliveira, formada em Administração e estudante de analise e desenvolvimento de sistemas,
        buscando conhecimentos e desenvolvimento pessoal e profissional na area de programação.
    </p>
     </PostModelo>
    )
}