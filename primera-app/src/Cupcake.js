import { useEffect, useState, useRef} from "react"
import "./cupcake.css"

const Cupcake = ({ color, sabor, foto }) => {

    const [vendido, setVendido] = useState(false)
    const vender = () => setVendido(true)

    const fotoCupcake = useRef()

    useEffect(() => {
        const elemento = fotoCupcake.current
        if(vendido){
            elemento.classList.add('vendido')
        }
    },[vendido])

    return (
        <div className="cupcake__card">
            <img ref={fotoCupcake} className='cupcake__foto' src={foto} />
            <h2 className="cupcake__color">{color}</h2>
            <p className="cupcake__sabor">{`Sabor: ${sabor}`}</p>
            <p className="cupcake__state"><span>Estado: </span>
                {
                    vendido ? "Vendido" : "A la venta"
                }
            </p>
            {
                !vendido && <button onClick={vender} className="cupcake__button">Vender</button>
            }
        </div>
    )
}
export default Cupcake