import styles from './styles.module.css'

interface EntradaNumericaProps {
    text: string;
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps) {

    const inc = () => props.onChange(props.value + 1)
    const dec = () => props.onChange(props.value - 1) 

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                {props.value === 0 ? 
                  <button>-</button> : <button onClick={dec}>-</button>
                }

                {props.value === 20 ? 
                  <button>+</button> : <button onClick={inc}>+</button>
                }
            </div>
        </div>
    )
}