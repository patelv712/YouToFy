import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login.js';
import DashBoard from './DashBoard.js';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <DashBoard code = {code}/> : <Login />
}

export default App;
