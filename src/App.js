import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Grid from './Grid';

function App() 
{<h1 className='heading' >
  Tic Tac Toi
</h1>
  return (

    <>
    {/* <Card player='O'/> */}
    
    <Grid numberOfCards={9}/>
    </>
  )
}

export default App;
