import styles from "./Porta.module.css";

type PortaProps = {
  selecionada: string
}

export default function Porta(props: PortaProps) {
    const PortaSelecionada = props.selecionada ? styles.Selecionada : '';

  return (
    <div className={styles.Area}>
      <div className={`${styles.Estrutura} ${PortaSelecionada}`}>
        <div className={styles.Porta}>
          <div className={styles.Numero}>3</div>
          <div className={styles.Macaneta}></div>
        </div>
      </div>
      <div className={styles.Chao}></div>
    </div>
  );
}
