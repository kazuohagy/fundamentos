export default function jsx() {
    const a = 2
    const b =3
    console.log(a*b)
    const obj = {nome:'mario', idade: 30}
    function subtitle(){
        return <h2>luigi number two</h2>
    }
    return(
        <div>
            <h1>JSX #01</h1>
            {a} * {b} = {a*b}
            {subtitle()}
            <p>{JSON.stringify({obj})}</p>
        </div>

    )
}