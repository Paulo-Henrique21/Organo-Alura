import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CffA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F3'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
      times={times.map(time => time.nome)}
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      /* colaboradores={colaboradores} */
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />)}
       {/* chamremos o método filter, ou seja vamos filtras os colaboradores, dentro do filter temos uma aerofunction, dentro da aerofunction recebo colaborador como parametro e um resultado desse boleado vai me dizer se vou levar ou não esse colaborador, e vou filtrar baseado em que? eu quero que o time desse colaborador seja igual ao time.nome*/}
       {/* <Rodape/>  */}
    </div>
  );
}

export default App;
