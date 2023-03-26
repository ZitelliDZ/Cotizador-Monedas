import React from 'react'
import '../styles/Spinner.css'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    height: 100px;
    
`

const Spinner = () => {
  return (
    
    <Contenedor>
<div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </Contenedor>
        
    
  )
}

export default Spinner