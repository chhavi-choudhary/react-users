import data from './data';
import './App.css';
import CardList from './components/CardList';

const App =()=> {

  return (
    <div className="App">
      <h1>heyyy</h1>
      <CardList {...data}/>
    </div>
  );
}

export default App;
