import { ReactNode } from 'react'
import styles from './cartao.module.css'

interface CartaoProps {
    bgcolor?: string
    children?: ReactNode
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao} 
        style={{background: props.bgcolor ?? "#fff"}}
        >
            {props.children}
        </div>
    )
}