import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
        <div>
        <Cabecalho titulo="Mario" />
        <Cabecalho titulo="Luigi" />

        </div>
        </Layout>
    )
}