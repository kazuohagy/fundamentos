import Layout from '../components/Layout'
import styles from './Estiloso.module.css'

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <Layout titulo="Exemplo de CSS">
            <h1>Estiloso</h1>
            <h2>Exemplo de CSS</h2>
            </Layout>
        </div>
    )
}