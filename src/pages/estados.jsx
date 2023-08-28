import Layout from '@/src/components/Layout'

export default function Estado(){
    let numero = 4
    return (
        <Layout titulo="Componente com Estado">
            <h1>Componente com Estado {numero}</h1>
        </Layout>
    )
}