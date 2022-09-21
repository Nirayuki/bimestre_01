import axios from 'axios';
import React, {useEffect, useState} from 'react';


export default function LinkDirect() {
    const [data, setData] = useState();

    useEffect(() => {
       axios.get('https://api.github.com/orgs/rocketseat/repos')
       .then((response) => setData(response.data))
       .catch((err) => {
        console.error("Deu errado ai" + err);
       })
    }, [])

    return(
        <>
            {
                data !== undefined ? data.map((e) => (
                    <div>
                        <span>{e.name}</span>
                        <p>{e.description}</p>
                        <a href={e.html_url}>Acessar repositório</a>
                    </div>
                )) : ""
            }
        </>
    );
}