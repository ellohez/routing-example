import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Users from './Components/Users';

import ContextProvider from './Components/ContextProvider';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* Render our own Nav component which renders the links */}
        <Nav/>
        <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/users/:id"><Users /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/404"><NotFound /></Route>
          </Switch>
      </BrowserRouter>

      <ContextProvider />
    </>
  );
}

export default App;
