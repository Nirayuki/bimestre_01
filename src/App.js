import './App.css';
import Evento from './components/Evento';
import TipoIngresso from './components/TipoIngresso';

const eventoData = [
  {
    id: "Data:",
    content: "2 de agosto de 2019 (Sexta-Feira)",
  },
  {
    id: "Horario:",
    content: "18h30 - 00h00",
  },
  {
    id: "Local:",
    content: "Parque do Povo",
  },
  {
    id: "Cidade:",
    content: "Campina Grande/PR",
  },
  {
    id: "Gênero:",
    content: "Arte em forma de SERTANEJO",
  }
]

const ingressoData = [
  {
    tipo: "Camarote (open bar):",
    preco: "R$150,00",
  },
  {
    tipo: "Camarote:",
    preco: "R$100,00",
  },
  {
    tipo: "Front-stage:",
    preco: "R$60,00",
  },
  {
    tipo: "Pista:",
    preco: "R$30,00",
  },
]

function App() {
  return (
    <div className='content'>
      <h1>
        Aron Felippe Kerkhoven
      </h1>
      <Evento 
      data={eventoData}
      />
      <TipoIngresso
      data={ingressoData}
      />
    </div>
  );
}

export default App;
