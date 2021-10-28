import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/fonts/style.css';
import './assets/css/style.css';
import DotWorld from './pages/DotWorld';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={DotWorld} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
