import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';


function App() {

  return (
    <Router>
      <div className="relative">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;

/**
 * BrowserRouter
 * 
 * Used by react to route between different pages thus request doesn't get sent to the server
 * but react gets hold of it and matches the path to any of the routes and renders it.
 */