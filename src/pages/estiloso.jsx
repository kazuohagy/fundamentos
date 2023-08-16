import styles from './Estiloso.module.css'
import Link from 'next/link'
export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estiloso</h1>
            <h2>Exemplo de CSS</h2>
        </div>
    )
}