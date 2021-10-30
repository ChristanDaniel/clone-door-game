import type { NextPage } from "next";
import Presente from "../src/components/Presente";
import Porta from "../src/components/Porta";
import PortaModel from "../src/Model/Porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../src/functions/Porta";
import Link from "next/link";

import styles from "../styles/Jogo.module.css";

const Jogo: NextPage = () => {
  const [portas, setPortas] = useState(criarPortas(16, 2));

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {portas.map((porta) => {
          return (
            <Porta
              key={porta.numero}
              value={porta}
              onChange={(novaPorta) =>
                setPortas(atualizarPortas(portas, novaPorta))
              }
            />
          );
        })}
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Jogo;
