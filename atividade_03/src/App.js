import {React, useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);


  function onSubmit(ev){
    ev.preventDefault();

    console.log()
  }

  return (
    <div className="App">

        <div className='content-1'>
          <button onClick={() => setCount(count + 1)}>
            +1
          </button>
            <input
              type="number"
              onChange={e => setCount(e.target.value)} 
              />
          <button onClick={() => setCount(count - 1)}>
            -1
          </button>
        </div>


        <div className='content-2'>
          <p>{count}</p>
        </div>
    </div>
  );
}

export default App;
