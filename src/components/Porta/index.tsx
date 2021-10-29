import PortaModel from "../../Model/Porta";
import styles from "./Porta.module.css";

type PortaProps = {
  porta: PortaModel
}

export default function Porta(props: PortaProps) {
  const { porta } = props
    const PortaSelecionada = porta.selecionada ? styles.Selecionada : '';

  return (
    <div className={styles.Area}>
      <div className={`${styles.Estrutura} ${PortaSelecionada}`}>
        <div className={styles.Porta}>
          <div className={styles.Numero}>{porta.numero}</div>
          <div className={styles.Macaneta}></div>
        </div>
      </div>
      <div className={styles.Chao}></div>
    </div>
  );
}
