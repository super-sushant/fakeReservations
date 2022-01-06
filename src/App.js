// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import PlanJourney from './components/PlanJourney';
import Dashboard from './components/Dashboard';
import AddStation from './components/AddStation';
import { useState } from 'react';

function App() {
  const data= JSON.parse(localStorage.getItem('data'))
  const [user,setuser]= useState(data?data.user.id:0)

  return (
    <div className="App" style={{backgroundImage:'bgimg.png'}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes >
        <Route exact path='/' element={<Login user={user} setuser={setuser}/>} />
        <Route exact path='/register' element ={<Register user={user} setuser={setuser}/>}/>
        <Route exact path='/plan' element ={<PlanJourney user={user} setuser={setuser}/>}/>
        <Route exact path='/dashboard' element ={ <Dashboard user={user} setuser={setuser}/>} />
        <Route exact path='/addstation' element ={ <AddStation user={user} setuser={setuser}/>} />
      </Routes>
    </div>
  );
}

export default App;