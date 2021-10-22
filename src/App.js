import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/restaurant'>
            <Restaurant></Restaurant>
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
