import PortaModel from "../../Model/Porta";
import Presente from "../Presente";
import styles from "./Porta.module.css";

type PortaProps = {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const PortaSelecionada = porta.selecionada  && !porta.aberta ? styles.Selecionada : '';

  const alternarSelecao = () => props.onChange(porta.alternarSelecao())
  const abrir = event => { event.stopPropagation(), props.onChange(porta.abrir())}

  return (
    <div className={styles.Area} onClick={alternarSelecao}>
      <div className={`${styles.Estrutura} ${PortaSelecionada}`}>
  
      {porta.fechada ?
        <div className={styles.Porta} >
          <div className={styles.Numero}>{porta.numero}</div>
          <div className={styles.Macaneta} onClick={abrir} />
        </div>
        : porta.temPresente ? <Presente /> : false
      }

      </div>
      <div className={styles.Chao} />
    </div>
  );
}
