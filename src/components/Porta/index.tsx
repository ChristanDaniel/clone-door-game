import PortaModel from "../../Model/Porta";
import styles from "./Porta.module.css";

type PortaProps = {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const PortaSelecionada = porta.selecionada ? styles.Selecionada : '';

  const alternarSelecao = event => props.onChange(porta.alternarSelecao())

  return (
    <div className={styles.Area} onClick={alternarSelecao}>
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
