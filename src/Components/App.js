import logo from '../logo.svg';
import './App.css';
import Die from "./Die.js"


function App() {
  return (
    <main className='main'>
      <div className='container'>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
      </div>
    </main>
  );
}

export default App;
