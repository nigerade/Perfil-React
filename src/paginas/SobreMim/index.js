import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpeg";
import { Link } from "react-router-dom";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Fala Dev!!
                <br />
                Me chamo Nicholas Gerade
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Nicholas Gerade"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou Programador Front-end, atualmente aprendendo React e curso Análise e Desenvolvimento de Sistemas pela Fatec São Paulo.
            </p>

            <p className={styles.paragrafo}>
                Meu primeiro contato com Programação foi aos 14 anos de Idade fazendo o Curso de Programador de Dispositivos Móveis pelo Senac Lapa Tito.
            </p>

            <p className={styles.paragrafo}>
                Desde então tenho aprendido cada vez mais sobre Programação, e então decidi prestar Vestibular para entrar na Fatec Ipiranga, cujo consegui, 
                e depois de 2 incríveis semestres me transferi para a Fatec São Paulo onde estou agora.
            </p>

            <p className={styles.paragrafo}>
                Eu amo aprender sobre tudo, e com Programação não é diferente, decidi me especializar como Programador Front-end pois gosto muito da parte
                criativa do Design, porém ainda planejo me tornar um Programador Full Stack no futuro.
            </p>

            <p className={styles.paragrafo}>
                Caso você queira me conhecer melhor ou interagir, recomendo que se conecte comigo em meu Linkedin!
            </p>

        </PostModelo>
    )
}