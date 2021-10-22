import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
