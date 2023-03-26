
import styled from "@emotion/styled"

import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from "../data/monedas"
import { useState, useEffect } from "react"
import Error from "./Error"


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 20px;
    &:hover{
        background-color: #3335c0;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    

    const [ moneda , SelecMonedas ] = useSelectMonedas('Elije tu Moneda', monedas);
    const [ cripto , SelecCriptos ] = useSelectMonedas('Elije tu CriptoMoneda', criptos);

    useEffect(() => {
        const consultaApi = async ()=>{
            const url =  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

            const respuesta = await fetch(url);            
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map( cripto =>{
                
                const objeto = {
                    id:  cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultaApi()
    
    }, [])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        

        if ([moneda,cripto].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        setMonedas({moneda,cripto})
    }

  return (
    <form onSubmit={handleSubmit}>
        {error && <Error>Todos los campos son Obligatorios</Error>}
        <SelecMonedas />
        <SelecCriptos />
        <InputSubmit type="submit" value='Cotizar' />
    </form>
  )
}

export default Formulario