import Layout from "@/src/components/Layout"
import router from "next/router"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Cliente(){
    const router = useRouter()
    useEffect(() => {
   
        console.log(router.query.codigo)
    }, [])
    return (
        <Layout titulo="Navegação Dinâmica">
            <h1>Cliente #01</h1>
            <span>Codigo = {router.query.codigo}</span><br></br>
            <span>Filial = {router.query.filial}</span>
        </Layout>
    )
}