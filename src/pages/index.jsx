import Link from 'next/link'
export default function inicio() {
    return (
        <div className="">
            <Link href="/">Inicio</Link><br></br>
            <Link href="/estiloso">Estiloso</Link><br />
            <Link href="/app">App</Link><br />
        </div>
    )
}