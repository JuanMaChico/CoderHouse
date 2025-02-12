import React, { useState } from 'react'

const Contador = ({nombre = 'Sin nombre', handler=()=>{}}) => {

    const [count, setCount] = useState(0)

    function prueba(){
        return "Probando"
    }





    return (
    <React.Fragment>
        <div style={{margin:"12px"}}>
            <button onClick={() => {
                handler();
                setCount((count) => count + 1)
            }
        }>
                {`El nombre del contador es: ${nombre} ${count}`}
            </button>
        </div>
    </React.Fragment>
  )
}


export default Contador