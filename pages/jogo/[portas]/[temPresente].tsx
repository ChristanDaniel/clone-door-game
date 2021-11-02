import type { NextPage } from "next";
import Porta from "../../../src/components/Porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../src/functions/Porta";
import Link from "next/link";

import styles from "../../../styles/Jogo.module.css";
import { useRouter } from "next/dist/client/router";
import PortaModel from "../../../src/Model/Porta";

const Jogo: NextPage = () => {
  const router = useRouter()

  const [portas, setPortas] = useState<PortaModel[]>([]);
  const [valoresValidos, setValoresValidos] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePresenteValido = temPresente >= 1 && temPresente <= portas

    setValoresValidos(qtdePresenteValido)
  }, [portas])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        { valoresValidos ? portas.map((porta) => {
          return (
            <Porta
              key={porta.numero}
              value={porta}
              onChange={(novaPorta) =>
                setPortas(atualizarPortas(portas, novaPorta))
              }
            />
          );
        })
         : <h1>Valores Inválidos... Por favor tente novamente.</h1>
        }
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
