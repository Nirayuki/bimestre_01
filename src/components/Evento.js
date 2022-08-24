import React from 'react';


export default function Evento({data}) {
    console.log(data.data);
    return (
        <div>
            <div>
                {
                    data.map((e) => (
                        <p>
                        <span style={{ fontWeight: 'bold'}}>{e.id} </span>
                            {e.content}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}