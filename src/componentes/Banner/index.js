import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Fala Dev!!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, eu me chamo Nicholas Gerade! Sou Programador Front-end e seja bem-vindo ao meu Blog desenvolvido com React.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Nicholas Gerade"
                />
            </div>
        </div>
    )
}