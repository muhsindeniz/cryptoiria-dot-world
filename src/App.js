import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/fonts/style.css';
import './assets/css/style.css';
import DotWorld from './pages/DotWorld';
import DogeMoon from './pages/DogeMoon';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={DotWorld} exact />
          <Route path="/DogeMoon" component={DogeMoon} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
