import Link from 'next/link'
import Navegador from '../components/Navegador'
export default function inicio() {
    return (
        <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh', flexWrap:'wrap'}}>
            <Navegador destino="/" texto="Inicio" cor="#9400d3" />
            <Navegador destino="/estiloso" texto="Estiloso"  />
            <Navegador destino="/app" texto="App" cor="#9400d3" />
        </div>
    )
}