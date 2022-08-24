import React from 'react';


export default function TipoIngresso ({data}) {
    return(
        <div>
            <h2 style={{ fontWeight: 'bold'}}>Ingressos</h2>
            <div>
                {
                    data.map((e) => (
                        <ul>  
                            <li>{e.tipo} {e.preco}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}