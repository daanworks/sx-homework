import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Helmet>
              <title>Card matching game</title>
            </Helmet>
            <Header />
            <Main />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
