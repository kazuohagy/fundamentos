export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>Header</h1>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
            <div className={styles.rodape}>
                <h1>Footer</h1>
            </div>
        </div>
    )
}